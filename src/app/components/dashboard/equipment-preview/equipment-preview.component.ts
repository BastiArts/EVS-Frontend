import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../../../services/services/http.service';
import {DataService} from '../../../../../services/services/data.service';
import {Entlehnung} from '../../../entlehnung';
import {DatePipe} from "@angular/common";

@Component({
    selector: 'equipment-preview',
    templateUrl: './equipment-preview.component.html',
    styleUrls: ['./equipment-preview.component.css']
})
export class EquipmentPreviewComponent implements OnInit {
    entlehnungen: Array<Entlehnung> = [];

    constructor(public http: HttpService, public dataService: DataService, private datepipe: DatePipe) {
    }

    ngOnInit() {
        this.fetchEquipment();
    }


    fetchEquipment() {
        this.http.fetchEquipment(this.dataService.sessionUser).subscribe(res => {
            this.entlehnungen = res;
        });
    }

}
