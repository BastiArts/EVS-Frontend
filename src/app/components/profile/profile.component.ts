import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../services/services/data.service';
import {MatProgressButtonOptions} from 'mat-progress-buttons';
import {HttpService} from '../../../../services/services/http.service';
import * as $ from 'jquery';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dataservice: DataService, private http: HttpService, private snackBar: MatSnackBar) {
  }

  avatarImage = {name: ''};
  mail: String;
  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Speichern',
    spinnerSize: 19,
    raised: true,
    stroked: false,
    buttonColor: '',
    spinnerColor: 'primary',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };

  ngOnInit() {
    const mail = document.getElementById('mail');
    if (this.dataservice.sessionUser.email.length === 0) {
      mail.focus();
      // this.btnOpts.disabled = true;
    }
    // Listener for image Upload
    $('#openUpload').click(function () {
      $('#imgupload').trigger('click');
    });
  }

  // Method to change edited Profile
  edit() {
    this.btnOpts.text = 'Speichern';
    this.btnOpts.disabled = false;
    this.btnOpts.active = false;
  }

// Save changed Profile
  save() {
    if (!this.btnOpts.disabled) {
      this.btnOpts.active = true;
      // Wait for the Server's response
      this.uploadImage([this.avatarImage]);
      this.btnOpts.active = false;
      this.btnOpts.disabled = true;
      this.btnOpts.text = 'Gespeichert';
    }
  }


  uploadImage(event) {
    // $('#imgForm').submit();
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      formData.append('file', element, element.name);
      formData.append('userid', this.dataservice.sessionUser.username);
      this.http.uploadPB(formData).subscribe(res => {
          /* tslint:disable:no-string-literal */
          this.dataservice.sessionUser = res;
          console.log(this.dataservice.sessionUser);
          localStorage.setItem('user', JSON.stringify(this.dataservice.sessionUser))
        },
        err => {
          console.log(err);
        });
      /* tslint:enable:no-string-literal */
    }
  }

  saveTemporalImage(event) {
    this.avatarImage = event[0];
    // TEMP IMAGE
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementsByClassName('avatar')[0].setAttribute('style',
        'background-image: url(\'' + e.target.result + '\')');
      document.getElementsByClassName('avatar')[1].setAttribute('style',
        'background-image: url(\'' + e.target.result + '\')');

    };
    reader.readAsDataURL(event[0]);
  }
}
