import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../services/services/data.service';

@Component({
    selector: 'retour-info',
    templateUrl: './retour-info.component.html',
    styleUrls: ['./retour-info.component.css']
})
export class RetourInfoComponent implements OnInit {

    constructor(public dataservice: DataService) {
    }

    ngOnInit() {
    }

}
