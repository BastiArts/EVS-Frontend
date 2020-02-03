import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/services/http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navBarFixed: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
