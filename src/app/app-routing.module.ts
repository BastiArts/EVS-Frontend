import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from "../../services/services/auth.service";
import {StudentsComponent} from "./components/dashboard/students/students.component";
import {EquipmentComponent} from "./components/dashboard/equipment/equipment.component";
const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthService], children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'students', component: StudentsComponent},
            {path: 'equipment', component: EquipmentComponent}
        ]},
    {path: 'home', component: HomepageComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
