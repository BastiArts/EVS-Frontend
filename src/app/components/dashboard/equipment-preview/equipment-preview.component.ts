import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../../../services/services/http.service';
import {DataService} from '../../../../../services/services/data.service';
import {Entlehnung} from '../../../entlehnung';

@Component({
    selector: 'equipment-preview',
    templateUrl: './equipment-preview.component.html',
    styleUrls: ['./equipment-preview.component.css']
})
export class EquipmentPreviewComponent implements OnInit {
    entlehnungen: Array<Entlehnung> = [];

    constructor(public http: HttpService, public dataService: DataService) {
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
