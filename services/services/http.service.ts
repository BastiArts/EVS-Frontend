import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {
    // Define a local Instance
    private http;
    // Inject the Service
    constructor(http:HttpClient) {
        this.http = http;
    }
    // Login Method which is called in the login.component.ts login() Method
    login(){
        return this.http.get(environment.apiUrl+'login?user=it150160&pwd=mypwd');
    }
}
