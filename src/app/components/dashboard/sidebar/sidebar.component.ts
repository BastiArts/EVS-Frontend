import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DataService} from '../../../../../services/services/data.service';
import {LogoutComponent} from '../../logout/logout.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver, public dataservice: DataService, public dialog: MatDialog) {
    }

    toggleActive(route: string) {
        // if(route !== "/"){
        return window.location.pathname.endsWith(route) ? 'active' : ''; // .indexOf(route) !== -1
        // }
    }

    ngOnInit(): void {

    }

    openLogout(): void {
        const dialogRef = this.dialog.open(LogoutComponent, {
            width: '250px'
        });
    }

}
