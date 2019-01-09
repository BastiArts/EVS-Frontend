import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/homepage/login/login.component';
import {AuthService} from "../../services/services/auth.service";
import {MaterialModule} from "./modules/material/material.module";
import {FormsModule} from "@angular/forms";
import { RetourInfoComponent } from './components/retour-info/retour-info.component';
import { StudentsComponent } from './components/dashboard/students/students.component';
import { EquipmentComponent } from './components/dashboard/equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    LoginComponent,
    RetourInfoComponent,
    StudentsComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
