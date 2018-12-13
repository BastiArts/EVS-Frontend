import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{
    constructor(private router:Router){}
    canActivate(){
        if(localStorage.getItem("loggedIn").localeCompare('true')==0){
            return true;
        }else{
            this.router.navigate(['home']);
            return false;
        }
    }
}
