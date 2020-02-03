import {Component, Inject, OnInit} from '@angular/core';
import {DialogData, DialogOverviewExampleDialog} from "../equipment-overview/equipment-overview.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {HttpService} from "../../../../../services/services/http.service";
import {Entlehnung} from "../../../entlehnung";
import {Equipment} from "../../../equipment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-bringback-dialog',
  templateUrl: './bringback-dialog.component.html',
  styleUrls: ['./bringback-dialog.component.css']
})
export class BringbackDialogComponent implements OnInit {

  panelOpenState = false;
  datasource = null;
  displayedColumns = ['name', 'value'];
  panelValues = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data, private datepipe: DatePipe,
              public dialogRef: MatDialogRef<BringbackDialogComponent>,
              private http: HttpService, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.panelValues = [
      {
        number: 1, title: 'Info über das Gerät', desc: '', datasource: [
          {name: 'Name', value: this.data.equ.name},
          {name: 'Hersteller', value: this.data.equ.brand},
          {name: 'Spezifikationen', value: this.getSpecs(this.data.equ.specs)}
        ]
      },
      {
        number: 2, title: 'Info über die Entlehnung', desc: '', datasource: [
          {name: 'Ausborgenummer', value: this.data.id},
          {name: 'Equipment', value: this.data.equ.displayname},
          {name: 'Von (Datum)', value: this.data.fromdate},
          {name: 'Bis (Datum)', value: this.data.todate}
        ]
      }
    ];
  }

  getSpecs(specs: string[]): string {
    if (specs.length === 0) {
      return ' - ';
    } else {
      let retourstring = '';
      specs.forEach(spec => {
        retourstring += spec + ', ';
      });
      return retourstring.substr(0, retourstring.length - 2);
    }
  }

  retourEquipment() {
    this.http.returnEntlehnung(this.data.id).subscribe(res => {
      this.snackbar.open('Anfrage zum Zurückgeben wurde entsandt!', 'Cool', {duration: 3000});
      this.dialogRef.close();
    });
  }

  changeValue(panel: any) {
    this.datasource = panel.datasource;
  }

}
