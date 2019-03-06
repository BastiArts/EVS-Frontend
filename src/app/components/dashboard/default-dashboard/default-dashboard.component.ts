import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {DataService} from '../../../../../services/services/data.service';
import {EquipmentComponent} from '../equipment/equipment.component';

@Component({
    selector: 'default-dashboard',
    templateUrl: './default-dashboard.component.html',
    styleUrls: ['./default-dashboard.component.css'],
})
export class DefaultDashboardComponent {
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({matches}) => {
            if (matches) {
                return [
                    {title: 'Meine Geräte', cols: 2, rows: 1, collapsed: true},
                    {title: 'Verfügbares Equipment', cols: 2, rows: 1, collapsed: false},
                    {title: 'Lehrer', cols: 2, rows: 1, collapsed: false}
                ];
            }

            return [
                {title: 'Meine Geräte', cols: 2, rows: 1, collapsed: false},
                {title: 'Verfügbares Equpiment', cols: 1, rows: 1, collapsed: false},
                {title: 'Lehrer', cols: 1, rows: 1, collapsed: false}
            ];
        })
    );

    constructor(private breakpointObserver: BreakpointObserver, public dataservice: DataService) {
    }
}
