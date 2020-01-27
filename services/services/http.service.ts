import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {User} from '../../src/app/util/app.user';
import {Equipment} from '../../src/app/equipment';

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

  // Rent Equipment
  rentEquipment(userid: string, serialNumber: string, fromdate: string, toDate: string) {
    const params = new HttpParams().set('userid', userid).set('serialnumber', serialNumber).set('fromdate', fromdate).set('todate', toDate);
    return this.http.get(environment.apiUrl + 'entlehnung/createentlehnung', {params});
  }

  deleteEquipment(e: Equipment) {
    return this.http.post(environment.apiUrl + 'equipment/deleteEquipment', e);
  }

  mergeUser(u: User) {
    return this.http.post(environment.apiUrl + 'users/updateUser', u);
  }

  addEquipment(e: Equipment) {
    return this.http.post(environment.apiUrl + 'equipment/addEquipment', e);
  }

  uploadImage(formData) {
    return this.http.post(environment.apiUrl + 'equipment/uploadimage', formData);
  }

  uploadPB(formData) {
    return this.http.post(environment.apiUrl + 'users/uploadimage', formData);
  }

  getLogs() {
    return this.http.get(environment.apiUrl + 'equipment/getalllogsfiles');
  }

  getLogByName(filename: string) {
    return this.http.get(environment.apiUrl + 'equipment/getdatafromlog/' + filename);
  }

  // Pending Ausborgeanfragen
  getPendingRequests() {
    return this.http.get(environment.apiUrl + 'entlehnung/getpendingentlehnungen');
  }

  // Bestätigen oder Declinen von Ausborgeanfragen
  editPendingRequests(id: number, status: string) {
    return this.http.get(environment.apiUrl + 'entlehnung/editentlehnung?id=' + id + '&status=' + status);
  }

  getRentDates(serial: string): any {
    return this.http.get(environment.apiUrl + 'entlehnung/rentDates/' + serial);
  }
}
