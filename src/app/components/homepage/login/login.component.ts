import {Component, OnInit} from '@angular/core';
import {User} from "../../../app.user";
import {MatProgressButtonOptions} from "mat-progress-buttons";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    currentUser: User = new User();
    btnOpts: MatProgressButtonOptions = {
        active: false,
        text: 'Login',
        spinnerSize: 19,
        raised: true,
        stroked: false,
        buttonColor: '',
        spinnerColor: 'primary', //accent
        fullWidth: false,
        disabled: false,
        mode: 'indeterminate',
    };

    constructor(private router: Router) {
    }

    login() {
        if (this.currentUser.username != "") {
            localStorage.setItem("loggedIn", "true");
            this.btnOpts.active = true;
            setTimeout(() => {
                this.btnOpts.active = false;
                console.log("Logged in");
                this.router.navigate(["dashboard"]);
            }, 1000);

        }

    }

    ngOnInit() {
    }

}
