import {User} from './until/app.user'; // CHANGED NAME FROM UNTIL TO UTIL

export class Equipment {
    interneNummer?: string;
    category?: string;
    name?: string;
    brand?: string;
    displayname?: string;
    serialNumber?: string;
    usableClasses?: string[];
    price?: number;
    photoPath?: string;
    specs?: string[];
    user?: User;

    constructor(internal?: string, cat?: string, name?: string, brand?: string, display?: string, serialnumber?: string, usableClasses?: string[], specs?: string[], price?: number, user?: User) {
        this.interneNummer = internal;
        this.category = cat;
        this.name = name;
        this.brand = brand;
        this.displayname = display;
        this.serialNumber = serialnumber;
        this.usableClasses = usableClasses;
        this.specs = specs;
        this.price = price;
        this.user = user;
    }


    setDisplayName() {
        this.displayname = this.brand + ' ' + this.name;
    }


}
