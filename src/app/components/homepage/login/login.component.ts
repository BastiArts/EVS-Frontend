import {Component, OnInit} from '@angular/core';
import {User} from '../../../util/app.user';
import {MatProgressButtonOptions} from 'mat-progress-buttons';
import {Router} from '@angular/router';
import {HttpService} from '../../../../../services/services/http.service';
import {DataService} from '../../../../../services/services/data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Person Objects for validating purposes
  currentUser: User = new User();
  tmppwd: String = '';

  // Settings for the Login spinner
  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Login',
    spinnerSize: 19,
    raised: true,
    stroked: false,
    buttonColor: '',
    spinnerColor: 'primary', // accent
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };

  // Injecting the Modules and Services
  constructor(private router: Router, private http: HttpService, private dataservice: DataService) {
  }

  // Login Method
  login(user: String, password: String) {
    // Receive asynchronously Data from the Server
    // In this case the Result should be an User-Object
    this.btnOpts.active = true;

    this.http.login(user, password).subscribe(res => {
        if (Object.entries(res).length !== 0) {
          localStorage.setItem('loggedIn', 'true');
          this.dataservice.sessionUser = res;
          localStorage.setItem('user', JSON.stringify(this.dataservice.sessionUser));
          if (this.dataservice.sessionUser.picturePath.toString() === '') {
            this.dataservice.sessionUser.picturePath = '../../../../assets/avatars/default.jpg';
          } else {
            this.dataservice.sessionUser.picturePath = 'http://vm88.htl-leonding.ac.at/' + this.dataservice.sessionUser.picturePath;
          }
          if ((<Boolean>res['isStudent'])) {
            this.dataservice.filteredNavItems = this.dataservice.navItems.filter(i => i['role'] !== 'Teacher');
          } else {
            this.dataservice.filteredNavItems = this.dataservice.navItems.filter(i => i['role'] !== 'Student');

          }
          localStorage.setItem('navItems', JSON.stringify(this.dataservice.filteredNavItems));
          this.router.navigate(['dashboard']);
        } else {
          this.btnOpts.active = false;
          alert('Invalid credentials');
        }
      },
      error => {
        this.btnOpts.active = false;
        alert('Error ' + error);
      });

  }

  ngOnInit() {
  }

}
