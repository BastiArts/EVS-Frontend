import {Injectable} from '@angular/core';
import {User} from '../../src/app/until/app.user';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    sessionUser: User = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null;
    // Sidebar Navigation-Items
    navItems: Array<Object> = [
        {
            name: 'Dashboard',
            icon: 'dashboard',
            route: '/',
            role: ''
        },
        {
            name: 'Meine Geräte',
            icon: 'assignment',
            route: 'equipment',
            role: 'Student'
        },
        {
            name: 'Ausleihen',
            icon: 'shopping_cart',
            route: 'leihen',
            role: 'Student'
        },
        {
            name: 'Logout',
            icon: 'logout',
            route: 'logout',
            role: ''
        }
    ];
    // Return Info Data
    equipmentName1: String = 'Zoom Audiogerät';
    returnDate1: String = '20.03.2019';

    equipmentName2: String = 'BlackMagic Kamera Set';
    returnDate2: String = '11.01.2019';

    equipmentName3: String = 'Sony Film Kamera P50';
    returnDate3: String = '15.02.2019';

    // EQUIPMENT OVERVIEW

    currentCat: string = '';


    constructor(private http: HttpService) {
    }

    getPB() {
        return {'background-image': this.sessionUser.picturePath.length === 0 ? 'url("../../../../assets/avatars/default.jpg")' : 'url("../../../../assets/avatars/' + this.sessionUser.picturePath + '")'};
    }
}
