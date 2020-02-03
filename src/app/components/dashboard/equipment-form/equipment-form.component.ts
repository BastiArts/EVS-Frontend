import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatSnackBar} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Equipment} from '../../../equipment';
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
  private productImage = null;
  brand: string = '';
  name: string = '';
  category: string = '';
  internal: string = '';
  displayname: string = '';
  price: string = '';
  serial: string = '';
  usableClasses: string[] = [];
  specs: string[] = [];
  longname: string = '';
  inventorynumber: string = '';
  classes = new FormControl();
  classList: string[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHITM', '5AHITM', '5BHITM'];
  categories: string[] = ['Kamera', 'Videokamera', 'Audiogerät', 'Zubehör'];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Detail[] = [
    {name: 'useful'}
  ];
  mainButtonDisabled = false;
  snackBarRef = null;

  constructor(private http: HttpService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.classes.setValue(this.classList);
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
    this.longname = '';
    this.inventorynumber = '';
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
    let i = 0;
    for (let useClass of this.classList) {
      if (useClass === this.classes.value[i]) {
        this.usableClasses.push(this.classes.value[i]);
        i++;
      }
    }
    this.mainButtonDisabled = true;

    this.http.addEquipment(new Equipment(0, this.editCategory(this.category), this.name, this.brand, this.internal, this.serial, this.usableClasses, '', this.specs, this.displayname, this.longname, this.inventorynumber)).subscribe(res => {
      console.log(res);
      if (this.productImage !== null) {
        this.uploadImage([this.productImage]);
      } else {
        this.snackBar.open('Equipment wurde hinzugefügt', 'Super!', {duration: 0});
        this.resetForm();
      }
    });
  }

  saveTemporalImage(event) {
    this.productImage = event[0];
    console.log(this.productImage);
    // TEMP IMAGE
    const reader = new FileReader();

    reader.onload = function (e) {
      // document.getElementById('previewIMG').setAttribute('src', e.target.result);
      // ts-ignore
      document.getElementsByClassName('innerUpload')[0].setAttribute('style', 'background-image: url(\'' + e.target.result + '\')');
    };
    reader.readAsDataURL(event[0]);
  }

  uploadImage(event) {
    console.log('Uploading image');
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      formData.append('file', element, element.name);
      formData.append('serialnumber', this.serial);
      this.http.uploadImage(formData).subscribe(res => {
          this.snackBar.open('Image successfully uploaded.', '✔', {duration: 0});
          this.resetForm();
        },
        err => {
          console.log(err);
        });
      /* tslint:enable:no-string-literal */
    }
  }

  editCategory(cat: string) {
    switch (cat) {
      case 'Kamera':
        return 'camera';
      case 'Videokamera':
        return 'videokamera';
      case 'Audiogerät':
        return 'audio';
      case 'Zubehör':
        return 'attachment';
      default:
        return 'nix';
    }
  }
}
