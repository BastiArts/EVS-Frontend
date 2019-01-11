import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from "../../services/services/auth.service";
import {StudentsComponent} from "./components/dashboard/students/students.component";
import {EquipmentComponent} from "./components/dashboard/equipment/equipment.component";

// Contains all the Routes, which can be navigated to
const routes: Routes = [
    // Fallback route if logged in
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    // Dashboard with Subroutes
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthService], children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'students', component: StudentsComponent},
            {path: 'equipment', component: EquipmentComponent}
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
