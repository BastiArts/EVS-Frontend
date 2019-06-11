import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {User} from '../../src/app/util/app.user';

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

    // Saves the changes made by the User (Profile update e.g.)
    updateUser(user: User) {
        return this.http.post(environment.apiUrl + 'users/updateUser', user);
    }

    // Fetches the whole Equipment
    fetchAllEquipment() {
        return this.http.get(environment.apiUrl + 'equipment/find/'); //  + user.username
    }

    // Fetches the borrowed Equipment of a specific User
    fetchEquipment(user: User) {
        return this.http.get(environment.apiUrl + 'equipment/find/' + user.username); //  + user.username
    }

    // Fetches the available Equipment that can be borrowed
    fetchAvailableEquipment() {
        return this.http.get(environment.apiUrl + 'equipment/findAvailable');
    }
}
