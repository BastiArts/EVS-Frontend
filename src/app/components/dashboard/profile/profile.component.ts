import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../../services/services/data.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(public dataservice: DataService) {
    }
    mail: String;
    ngOnInit() {
        const mail = document.getElementById('mail');
        if (this.dataservice.sessionUser.email.length === 0) {
            mail.focus();
        }
    }

}
