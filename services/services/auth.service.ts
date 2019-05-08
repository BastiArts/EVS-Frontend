import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {User} from '../../src/app/until/app.user';
import {DataService} from './data.service';

@Injectable()
export class AuthService implements CanActivate {
    // Inject the routing
    constructor(private router: Router) {
    }

    // Check if User is logged in
    canActivate() {
        if (localStorage.getItem('user') !== null && localStorage.getItem('loggedIn').localeCompare('true') === 0) {
            return true;
        } else {
            this.router.navigate(['home']);
            return false;
        }
    }
}
