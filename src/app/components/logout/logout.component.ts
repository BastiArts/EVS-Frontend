import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../../services/services/data.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private router: Router, private dataservice: DataService) {
    }

    ngOnInit() {
    }

    onCancel(): void {
        if (this.dataservice.sessionUser.isStudent) {
            this.router.navigate(['dashboard']);
        } else {
            this.router.navigate(['teacher']);
        }
    }

    logout(): void {
        localStorage.setItem('loggedIn', 'false');
        localStorage.removeItem('user');
        this.router.navigate(['home']);
    }


}
