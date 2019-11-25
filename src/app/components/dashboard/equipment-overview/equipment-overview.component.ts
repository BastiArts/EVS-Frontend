import {Component, Inject, OnInit} from '@angular/core';
import {Equipment} from '../../../equipment';
import {DataService} from '../../../../../services/services/data.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {HttpService} from '../../../../../services/services/http.service';
import {DatePipe} from '@angular/common';

export interface DialogData {
    interneNummer?: string;
    category?: string;
    name?: string;
    brand?: string;
    displayname?: string;
    serialNumber?: string;
    usableClasses?: string[];
    price?: number;
    photopath?: string;
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

    choosePhotoPath(equ: Equipment) {
        switch (equ.category) {
            case 'video':
                return equ.photopath; // ? environment.domain + '/' + equ.photopath : '../assets/icons/equip/videocamera_icon.svg';
            case 'camera':
                return equ.photopath; // ? environment.domain + '/' + equ.photopath : '../assets/icons/equip/camera_icon.svg';
            case 'audio':
                return equ.photopath; // ? environment.domain + '/' + equ.photopath : '../assets/icons/equip/microphone_icon.svg';
            default:
                return equ.photopath; // ? environment.domain + '/' + equ.photopath : '../assets/LULULU.png';
        }
    }

    openDialog(equi: Equipment) {


        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '45%',
            height: '50%',
            data: {brand: equi.brand, name: equi.name, specs: equi.specs, interneNummer: equi.internenummer, serialNumber: equi.serialnumber, cat: equi.category, usableCla: equi.usableclasses, equip: equi}
        });

    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
    styleUrls: ['dialog.css']
})
export class DialogOverviewExampleDialog {

    selectedBeginnDate = new Date();
    selectedEndDate = new Date();

    rentRequest: String = '';
    fromDate = '';
    toDate = '';
    serialNumber;
    userid;
    minDate = new Date();
    isReservieren: Boolean = true;
    isAusborgen: Boolean = false;


    close(): void {
        this.dialogRef.close();
    }

    maxDate = new Date(3000, 0, 1);

    delete(equi: Equipment) {
        this.dialogRef.close();
    }

    private rentDates: Array<object> = [];
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public dataservice: DataService, private http: HttpService, public datepipe: DatePipe) {
        this.http.getRentDates(data.serialNumber).subscribe(res => {
            this.rentDates = res;
            console.warn(res);
        });
    }

    rent(serialNumber: any, selectedBeginnDate: Date, selectedEndDate: Date): void {


        this.toDate = this.datepipe.transform(selectedEndDate, 'dd-MM-yyyy');
        this.fromDate = this.datepipe.transform(selectedBeginnDate, 'dd-MM-yyyy');
        this.serialNumber = serialNumber;
        // Unique identifier (e.g it150178)
        this.userid = this.dataservice.sessionUser.username;

        this.http.rentEquipment(this.userid, this.serialNumber, this.fromDate, this.toDate).subscribe(res => console.log(res));
        this.dialogRef.close();
    }

    /*
        somethingChanged(e): void {
           // this.selectedBeginnDate = e.value;
            this.selectedEndDate = this.selectedBeginnDate > this.selectedEndDate ? this.selectedBeginnDate : this.selectedEndDate;

            if (this.selectedBeginnDate = this.minDate) {
                this.isAusborgen = true;
                this.isReservieren = false;
            } else {
                this.isAusborgen = false;
                this.isReservieren = true;
            }

        }
    */

    myFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday
        /* this.rentDates.forEach(date => {
             if(d >= new Date(date['fromdate']) && d <= new Date(date['todate'])){
                 return false;
             }else if(day !== 0 && day !== 6){
                 return true;
             }
         });*/
        return day !== 0 && day !== 6;
    };
}
