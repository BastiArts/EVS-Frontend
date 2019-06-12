import {Component, OnInit} from '@angular/core';
import {Equipment} from '../../../../equipment';

@Component({
    selector: 'Anfragen',
    templateUrl: './anfrage.component.html',
    styleUrls: ['./anfrage.component.css']
})
export class AnfrageComponent implements OnInit {

    displayedColumns: string[] = ['name', 'geraet', 'datum', 'accept', 'decline'];
    datum: Date = new Date();
    date: string = this.datum.getDay() + '/' + this.datum.getMonth() + '/' + this.datum.getFullYear();
    // tslint:disable-next-line:max-line-length
    equipments: Equipment[] = JSON.parse('[{"id":1,"category":"video","name":"Camcorder","brand":"Sony","displayname":"Sony Camcorder","price":0,"borrowUser":{"username":"it150160","firstname":"Manuel","lastname":"Fadljevic","email":"","schoolclass":"4AHITM","isStudent":true,"picturePath":""}},' +
        // tslint:disable-next-line:max-line-length
        '{"id":2,"category":"camera","name":"CoolCam","brand":"Ericson","displayname":"Ericson CoolCam","interneNummer":"F23 F20","price":0,"borrowUser":{"username":"it150178","firstname":"Sebastian","lastname":"Schiefermayr","email":"","schoolclass":"4AHITM","isStudent":true,"picturePath":""}},' +
        // tslint:disable-next-line:max-line-length
        '{"id":3,"category":"video","name":"Camcorder3","brand":"Apple","displayname":"Apple Camcorder3","interneNummer":"F22 A300","price":0,"borrowUser":{"username":"it150158","firstname":"Julian","lastname":"Dannigner","email":"","schoolclass":"4AHITM","isStudent":false,"picturePath":""}}]');

    constructor() {
    }

    ngOnInit() {
    }

    acceptEquipmentAnfrage(equ: Equipment) {
        // code for accepting
        alert(equ.displayname);
    }

    declineEquipmentAnfrage(equ: Equipment) {
        // code for declining...
    }

}
