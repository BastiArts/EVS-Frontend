import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from "../../services/services/auth.service";
import {EquipmentComponent} from "./components/dashboard/equipment/equipment.component";
import {StudentsBoardComponent} from "./components/dashboard/students-board/students-board.component";
import {DefaultDashboardComponent} from "./components/dashboard/default-dashboard/default-dashboard.component";
import {ProfileComponent} from "./components/dashboard/profile/profile.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {SettingsComponent} from "./components/dashboard/settings/settings.component";

// Contains all the Routes, which can be navigated to
const routes: Routes = [
    // Fallback route if logged in
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // Dashboard with Subroutes
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthService], children: [
            {path: '', component: DefaultDashboardComponent},
            {path: 'students', component: StudentsBoardComponent},
            {path: 'equipment', component: EquipmentComponent},
            {path: 'logout', component: LogoutComponent},
            {path: 'profil', component: ProfileComponent},
            {path: 'settings', component: SettingsComponent},
            {path: '**', redirectTo: 'dashboard'}
        ]},
    {path: 'home', component: HomepageComponent},
    // Fallback route if not logged in
    {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
