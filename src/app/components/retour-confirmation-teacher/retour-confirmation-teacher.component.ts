import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/services/http.service";
import {ActivatedRoute} from "@angular/router";
import {Entlehnung} from "../../entlehnung";

@Component({
  selector: 'app-retour-confirmation-teacher',
  templateUrl: './retour-confirmation-teacher.component.html',
  styleUrls: ['./retour-confirmation-teacher.component.css']
})
export class RetourConfirmationTeacherComponent implements OnInit {
  title: string = 'test it works';
  entlehnung: Entlehnung = null;
  buttonDisabled = true;
  constructor(private http: HttpService, private activatedRout: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRout.queryParams.subscribe(params => {
      const id_of_entlehnung = params.id;

      this.http.getSingleEntlehnung(id_of_entlehnung).subscribe(res => {
        console.log(res);
        this.entlehnung = res;
        this.buttonDisabled = false;
      });
    });
  }

  onButtonClick(){
    this.http.confirmEntlehnung(this.entlehnung.id).subscribe(res => {
      window.location.assign('vm88.htl-leonding.ac.at');
    });
  }
}
