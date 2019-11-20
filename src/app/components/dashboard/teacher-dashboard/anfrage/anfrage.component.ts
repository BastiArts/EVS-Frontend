import {Component, OnInit} from '@angular/core';
import {Equipment} from '../../../../equipment';
import {HttpService} from '../../../../../../services/services/http.service';
import {Entlehnung} from "../../../../entlehnung";

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
  entlehnungs: Entlehnung[];


  constructor(private httpservice: HttpService) {
    this.httpservice.getPendingRequests().subscribe(res => {
      this.entlehnungs = res;
      console.log(res);
    });
  }

  ngOnInit() {

  }

  acceptEquipmentAnfrage(ent: Entlehnung) {
    // code for accepting
    this.httpservice.editPendingRequests(ent.id, 'confirmed').subscribe(res => {
      this.entlehnungs = res;
    });
  }

  declineEquipmentAnfrage(ent: Entlehnung) {
    // code for declining...
    this.httpservice.editPendingRequests(ent.id, 'declined').subscribe(res => {
      this.entlehnungs = res;
    });
  }

  parseDate(date: Date) {
    return date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear();
  }

}
