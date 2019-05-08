import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../../services/services/data.service';
import {MatProgressButtonOptions} from 'mat-progress-buttons';
import {HttpService} from '../../../../../services/services/http.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(public dataservice: DataService, private http: HttpService) {
    }

    mail: String;
    btnOpts: MatProgressButtonOptions = {
        active: false,
        text: 'Speichern',
        spinnerSize: 19,
        raised: true,
        stroked: false,
        buttonColor: '',
        spinnerColor: 'primary', // accent
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
    }

    edit() {
        this.btnOpts.text = 'Speichern';
        this.btnOpts.disabled = false;
        this.btnOpts.active = false;
    }

    save() {
        if (!this.btnOpts.disabled) {
            this.btnOpts.active = true;
            this.http.updateUser(this.dataservice.sessionUser).subscribe(res => {
                this.btnOpts.active = false;
                this.btnOpts.disabled = true;
                this.btnOpts.text = 'Gespeichert';
            });
        }
    }

}