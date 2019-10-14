import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {DataService} from '../../../../../services/services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'default-dashboard',
    templateUrl: './default-dashboard.component.html',
    styleUrls: ['./default-dashboard.component.css'],
})
export class DefaultDashboardComponent implements OnInit {
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({matches}) => {
            if (matches) {
                // Mobile
                return [
                    {title: 'Meine Geräte', cols: 2, rows: 1, collapsed: true},
                    {title: 'Verfügbares Equipment', cols: 2, rows: 1, collapsed: false},
                    {title: 'Lehrer', cols: 2, rows: 1, collapsed: false}
                ];
            }
            // Web
            return [
                {title: 'Meine Geräte', cols: 2, rows: 1, collapsed: false},
                {title: 'Verfügbares Equpiment', cols: 1, rows: 1, collapsed: false},
                {title: 'Lehrer', cols: 1, rows: 1, collapsed: false}
            ];
        })
    );

    constructor(private breakpointObserver: BreakpointObserver, public dataservice: DataService, private router: Router) {
    }

    ngOnInit(): void {
        if (!this.dataservice.sessionUser.isStudent) {
            this.router.navigate(['teacher']);
        }
    }
}
