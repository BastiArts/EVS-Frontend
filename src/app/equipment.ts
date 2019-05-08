export class Equipment {
    interneNummer: string;
    category: string;
    name: string;
    brand: string;
    displayname: string;
    serialNumber: string;
    usableClasses: string[];
    price: number;
    photoPath: string;
    specs: string;
    user: string;

    constructor(cat: string, name: string, brand: string) {
        this.category = cat;
        this.name = name;
        this.brand = brand;
    }

    setDisplayName() {
        this.displayname = this.brand + ' ' + this.name;
    }


}
