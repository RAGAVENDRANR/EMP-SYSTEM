import { ProfileComponent } from './dashboard/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { NopageComponent } from './dashboard/nopage/nopage.component';
import { ResetComponent } from './auth/reset/reset.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AttendenceComponent } from './dashboard/attendence/attendence.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NoticeboardComponent } from './dashboard/noticeboard/noticeboard.component';
import { SupportComponent } from './dashboard/support/support.component';
import { TimesheetComponent } from './dashboard/timesheet/timesheet.component';

const routes: Routes = [
  
  {path:'',redirectTo: 'auth', pathMatch: 'full'},
  //widcard routing
  {path:'auth',component:AuthComponent,
    children:[
      {path:'',component:LoginComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'reset',component:ResetComponent},
      {path:'forgot',component:ForgotComponent},
    ]},
{path:'dashboard',component:DashboardComponent,
        children:[
          {path:'',component:HomeComponent},
          {path:'home',component:HomeComponent},
          {path:'attendence',component:AttendenceComponent},
          {path:'contact',component:ContactComponent},
          {path:'nopage',component:NopageComponent},
          {path:'noticeboard',component:NoticeboardComponent},
          {path:'profile',component:ProfileComponent},
          {path:'support',component:SupportComponent},
          {path:'timesheet',component:TimesheetComponent},
          {path:'support',component:SupportComponent},
          ]},
  {path:'**',component:NopageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
