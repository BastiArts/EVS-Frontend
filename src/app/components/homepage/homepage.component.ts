import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        if (localStorage.getItem('user') !== null && localStorage.getItem('loggedIn').localeCompare('true') === 0) {
            this.router.navigate(['dashboard']);
        }
    }

}
