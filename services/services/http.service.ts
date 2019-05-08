import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {User} from '../../src/app/until/app.user';

@Injectable()
export class HttpService {
    // Define a local Instance
    private http;

    // Inject the Service
    constructor(http: HttpClient) {
        this.http = http;
    }

    // Login Method which is called in the login.component.ts login() Method
    login(username: String, password: String) {
        return this.http.get(environment.apiUrl + 'users/login?user=' + username + '&pwd=' + password);
    }

    updateUser(user: User) {
        return this.http.post(environment.apiUrl + 'users/updateUser', user);
    }

    fetchEquipment(user: User) {
        return this.http.get(environment.apiUrl + 'equipment/find'); //  + user.username
    }
}
