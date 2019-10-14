import {Component, Inject, OnInit} from '@angular/core';
import {Equipment} from '../../../Equipment';
import {DataService} from '../../../../../services/services/data.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {HttpService} from '../../../../../services/services/http.service';

export interface DialogData {
    interneNummer?: string;
    category?: string;
    name?: string;
    brand?: string;
    displayname?: string;
    serialNumber?: string;
    usableClasses?: string[];
    price?: number;
    photoPath?: string;
    specs?: string[];
}

@Component({
    selector: 'EquipmentOverview',
    templateUrl: './equipment-overview.component.html',
    styleUrls: ['./equipment-overview.component.css']
})
export class EquipmentOverviewComponent implements OnInit {


    equipment: Equipment[];


    constructor(public equService: DataService, public dialog: MatDialog, private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.fetchAllEquipment().subscribe(res => {
            this.equipment = res;
        });
        /* for (const equ of this.equipment) {
             equ.setDisplayName();
         }*/
    }

    choosePhotoPath(cat: string) {
        switch (cat) {
            case 'video':
                return '../assets/icons/equip/videocamera_icon.svg';
            case 'camera':
                return '../assets/icons/equip/camera_icon.svg';
            case 'audio':
                return '../assets/icons/equip/microphone_icon.svg';
            default:
                return '../assets/LULULU.png';
        }
    }

    openDialog(equi: Equipment) {


        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '20%',
            height: '50%',
            data: {brand: equi.brand, name: equi.name, specs: equi.specs, interneNummer: equi.interneNummer, price: equi.price, serialNumber: equi.serialNumber, cat: equi.category, usableCla: equi.usableClasses, equip: equi}
        });


    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
    styleUrls: ['dialog.css']
})

export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private http: HttpService, public dataservice: DataService) {
    }

    close(): void {
        this.dialogRef.close();
    }

    edit(equipment: Equipment): void {
        this.http.updateEquipment(equipment);
        this.dialogRef.close();
    }

    delete(equi: Equipment) {
        this.http.deleteEquipment(equi);
        this.dialogRef.close();
    }

}
