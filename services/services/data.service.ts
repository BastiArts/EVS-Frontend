import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  equipmentName1: String = "Zoom Audiogerät";
  returnDate1: String = "20.03.2019";

  equipmentName2: String = "BlackMagic Kamera Set";
  returnDate2: String = "11.01.2019";

  equipmentName3: String = "Sony Film Kamera P50";
  returnDate3: String = "15.02.2019";
  constructor() {}
}
