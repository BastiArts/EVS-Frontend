import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DialogOverviewExampleDialogComponent} from './components/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HomepageComponent} from './components/homepage/homepage.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/homepage/login/login.component';
import {AuthService} from '../../services/services/auth.service';
import {MaterialModule} from './modules/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RetourInfoComponent} from './components/retour-info/retour-info.component';
import {EquipmentComponent} from './components/dashboard/equipment/equipment.component';
import {HttpService} from '../../services/services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from '../../services/services/data.service';
import {SidebarComponent} from './components/dashboard/sidebar/sidebar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {DefaultDashboardComponent} from './components/dashboard/default-dashboard/default-dashboard.component';
import {TeacherDashboardComponent} from './components/dashboard/teacher-dashboard/teacher-dashboard.component';
import {EquipmentPreviewComponent} from './components/dashboard/equipment-preview/equipment-preview.component';
import {LogoutComponent} from './components/logout/logout.component';
import {ProfileComponent} from './components/profile/profile.component';
import {SettingsComponent} from './components/settings/settings.component';
import {SettingsService} from '../../services/services/settings.service';
import {TeacherScheduleComponent} from './components/dashboard/teacher-schedule/teacher-schedule.component';
import {
  DialogOverviewExampleDialog,
  EquipmentOverviewComponent
} from './components/dashboard/equipment-overview/equipment-overview.component';
import {EquipmentChartComponent} from './components/dashboard/equipment-chart/equipment-chart.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {EquipmentFormComponent} from './components/dashboard/equipment-form/equipment-form.component';
import {RoleGuard} from '../../services/services/role.guard';
import {EquipmentInfoComponent} from './components/equipment-info/equipment-info.component';
import {AnfrageComponent} from './components/dashboard/teacher-dashboard/anfrage/anfrage.component';
import {LogViewComponent} from './components/log-view/log-view.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    LoginComponent,
    RetourInfoComponent,
    EquipmentComponent,
    SidebarComponent,
    DefaultDashboardComponent,
    TeacherDashboardComponent,
    EquipmentPreviewComponent,
    DialogOverviewExampleDialogComponent,
    LogoutComponent,
    ProfileComponent,
    SettingsComponent,
    TeacherScheduleComponent,
    EquipmentOverviewComponent,
    EquipmentChartComponent,
    EquipmentFormComponent,
    EquipmentInfoComponent,
    DialogOverviewExampleDialog,
    AnfrageComponent,
    LogViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDialogModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [AuthService, HttpService, DataService, SettingsService, RoleGuard, DatePipe],
  entryComponents: [DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})

export class AppModule {
}
