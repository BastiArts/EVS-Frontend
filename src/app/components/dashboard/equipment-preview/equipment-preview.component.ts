import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../../../services/services/http.service';
import {DataService} from '../../../../../services/services/data.service';
import {Entlehnung} from '../../../entlehnung';
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {BringbackDialogComponent} from "../bringback-dialog/bringback-dialog.component";

@Component({
  selector: 'equipment-preview',
  templateUrl: './equipment-preview.component.html',
  styleUrls: ['./equipment-preview.component.css']
})
export class EquipmentPreviewComponent implements OnInit {
  entlehnungen: Array<Entlehnung> = [];

  constructor(public http: HttpService, public dataService: DataService, private datepipe: DatePipe, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchEquipment();
  }


  fetchEquipment() {
    this.http.fetchEquipment(this.dataService.sessionUser).subscribe(res => {
      this.entlehnungen = res;
    });
  }

  openDialog(ent: Entlehnung) {
    let dialogref = this.dialog.open(BringbackDialogComponent, {
      width: '90vw',
      height: '90vh',
      maxWidth: '1200px',
      maxHeight: '800px',
      data: ent,
    });
  }

}
