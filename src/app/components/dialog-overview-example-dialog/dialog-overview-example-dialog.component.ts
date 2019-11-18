import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Equipment} from '../../equipment';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  close(): void {
    this.dialogRef.close();
  }

  edit(): void {
    this.dialogRef.close();
  }

  delete(equi: Equipment ) {
    this.dialogRef.close();
  }
}



