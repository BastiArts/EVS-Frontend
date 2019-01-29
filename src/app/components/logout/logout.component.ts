import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onCancel():void{
    this.router.navigate(["dashboard"]);
  }

  logout():void{
    localStorage.setItem("loggedIn","false");
    this.router.navigate(["home"]);
  }


}
