import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {DefaultDashboardComponent} from './components/dashboard/default-dashboard/default-dashboard.component';
import {TeacherDashboardComponent} from './components/dashboard/teacher-dashboard/teacher-dashboard.component';
import {EquipmentPreviewComponent} from './components/dashboard/equipment-preview/equipment-preview.component';
import {LogoutComponent} from './components/logout/logout.component';
import {ProfileComponent} from './components/dashboard/profile/profile.component';
import {SettingsComponent} from './components/dashboard/settings/settings.component';
import {SettingsService} from '../../services/services/settings.service';
import {TeacherScheduleComponent} from './components/dashboard/teacher-schedule/teacher-schedule.component';
import {EquipmentOverviewComponent} from './components/dashboard/equipment-overview/equipment-overview.component';
import {EquipmentChartComponent} from './components/dashboard/equipment-chart/equipment-chart.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {EquipmentFormComponent} from './components/dashboard/equipment-form/equipment-form.component';

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
        LogoutComponent,
        ProfileComponent,
        SettingsComponent,
        TeacherScheduleComponent,
        EquipmentOverviewComponent,
        EquipmentChartComponent,
        EquipmentFormComponent
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
        GoogleChartsModule.forRoot()
    ],
    providers: [AuthService, HttpService, DataService, SettingsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
