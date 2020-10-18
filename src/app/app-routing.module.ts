import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddEmployeesComponent } from './employee/add-employees/add-employees.component';
import { ViewEmployeesComponent } from './employee/view-employees/view-employees.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: 'view-employees', component: ViewEmployeesComponent, canActivate: [AuthGuard]},
  {path: 'add-employee', component: AddEmployeesComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
