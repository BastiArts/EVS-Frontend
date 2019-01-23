import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {DataService} from "../../../../../services/services/data.service";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, public dataservice:DataService) {}
  toggleActive(route:string){
    //if(route !== "/"){
      return window.location.pathname.endsWith(route) ? 'active' : ''; //.indexOf(route) !== -1
   // }
  }
}
