export class Equipment {
    internenummer?: string;
    category?: string;
    name?: string = '';
    brand?: string = '';
    displayname?: string = '';
    serialnumber?: string = '';
    usableclasses?: string[];
    price?: number;
    photoPath?: string;
    specs?: string[];
    longname?: string = '';
    inventorynumber?: string = '';
    constructor()
    // constructor(cat: string, name: string, brand: string)
    constructor(internal: string, cat: string, name: string, brand: string, displayname: string, serielnumber: string, usableclasses: string[], specs: string[], longname: string, inventorynumber: string)
    constructor(internal?: string, cat?: string, name?: string, brand?: string, displayname?: string, serialnumber?: string, usableclasses?: string[], specs?: string[], longname?: string, inventorynumber?: string) {
        this.internenummer = internal;
        this.category = cat;
        this.name = name;
        this.brand = brand;
        this.displayname = displayname;
        // this.displayname = brand + ' ' + name;
        this.serialnumber = serialnumber;
        this.usableclasses = usableclasses;
        this.specs = specs;
        this.longname = longname;
        this.inventorynumber = inventorynumber;
    }


    setDisplayName() {
        this.displayname = this.brand + ' ' + this.name;
    }


}
