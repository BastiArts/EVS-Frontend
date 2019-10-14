import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Equipment} from '../../../Equipment';
import {HttpService} from '../../../../../services/services/http.service';

export interface Detail {
    name: string;
}

@Component({
    selector: 'equipment-form',
    templateUrl: './equipment-form.component.html',
    styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {
    brand: string = '';
    name: string = '';
    category: string = '';
    internal: string = '';
    displayname: string = '';
    price: string = '';
    serial: string = '';
    usableClasses: string[] = [];
    specs: string[] = [];

    classes = new FormControl();
    classList: string[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHITM', '5AHITM', '5BHITM',];
    categories: string[] = ['Kamera', 'Videokamer', 'Audiogerät', 'Zubehör'];
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    fruits: Detail[] = [
        {name: 'useful'}
    ];

    constructor(private http: HttpService) {
    }

    resetForm() {
        this.brand = '';
        this.name = '';
        this.category = '';
        this.internal = '';
        this.displayname = '';
        this.price = '';
        this.serial = '';
        this.usableClasses = [];
        this.specs = [];
        this.fruits = [];
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({name: value.trim()});
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(detail: Detail): void {
        const index = this.fruits.indexOf(detail);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }

    makeNewEquipment() {

        /*
        * was haben wir bis jezt für Equipment:
        *   + internal
        *   + category
        *   + name
        *   + brand
        *   + displayname
        *   + usableClasses
        *   + price
        *   - specs
        * */
        let i = 0;
        for (let useClass of this.classList) {
            if (useClass === this.classes.value[i]) {
                this.usableClasses.push(this.classes.value[i]);
                i++;
            }
        }
        this.http.addEquipment(new Equipment(this.internal, this.category, this.name, this.brand, this.displayname, this.serial, this.usableClasses, this.getSpecs(), parseInt(this.price, 10), null));
        this.resetForm();
    }

    getSpecs(): string[] {
        for (let s of this.fruits) {
            this.specs.push(s.name);
        }
        return this.specs;
    }

    ngOnInit() {
    }

}
