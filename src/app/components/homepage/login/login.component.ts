import {Component, OnInit} from '@angular/core';
import {User} from "../../../app.user";
import {MatProgressButtonOptions} from "mat-progress-buttons";
import {Router} from "@angular/router";
import {HttpService} from "../../../../../services/services/http.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // Person Objects for validating purposes
    currentUser: User = new User();
    tmppwd:String = "";

    // Settings for the Login spinner
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
    // Injecting the Modules and Services
    constructor(private router: Router, private http:HttpService) {
    }
    // Login Method
    login(user:String,password:String) {
            // Receive asynchronously Data from the Server
            // In this case the Result should be an User-Object
        this.btnOpts.active = true;

         this.http.login(user,password).subscribe(res => {
             if(res === true){
                 localStorage.setItem("loggedIn", "true");
                 this.router.navigate(["dashboard"]);
             }
         });

    }

    ngOnInit() {
    }

}
