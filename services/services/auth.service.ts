import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
    // Inject the routing
    constructor(private router: Router) {
    }

    // Check if User is logged in
    canActivate() {
        if (localStorage.getItem('loggedIn').localeCompare('true') === 0 && localStorage.getItem('user') !== null) {
            return true;
        } else {
            this.router.navigate(['home']);
            return false;
        }
    }
}
