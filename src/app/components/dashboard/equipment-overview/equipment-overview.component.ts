import {Component, OnInit} from '@angular/core';
import {Equipment} from '../../../Equipment';
import {DataService} from '../../../../../services/services/data.service';

@Component({
    selector: 'EquipmentOverview',
    templateUrl: './equipment-overview.component.html',
    styleUrls: ['./equipment-overview.component.css']
})
export class EquipmentOverviewComponent implements OnInit {


    equipment: Equipment[] = [
        new Equipment('camera', 'XT100', 'FujiCam'),
        new Equipment('camera', 'RX230', 'Sony'),
        new Equipment('camera', 'Magic', 'Black'),
        new Equipment('video', 'FDR-AX100', 'Sony'),
        new Equipment('video', 'JVC GY-HM70E', 'unknown'),
        new Equipment('audio', 'Zoom', 'otherCompanies')];


    constructor(public equService: DataService) {
    }

    ngOnInit() {
        for (let equ of this.equipment) {
            equ.setDisplayName();
        }
    }

    choosePhotoPath(cat: string) {
        switch (cat) {
            case 'video':
                return '../assets/video.png';
            case 'camera':
                return '../assets/camera.png';
            case 'audio':
                return '../assets/audio.png';
            default:
                return '../assets/LULULU.png';
        }
    }

}
