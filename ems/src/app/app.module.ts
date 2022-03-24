import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SupportComponent } from './dashboard/support/support.component';
import { TimesheetComponent } from './dashboard/timesheet/timesheet.component';
import { AttendenceComponent } from './dashboard/attendence/attendence.component';
import { NoticeboardComponent } from './dashboard/noticeboard/noticeboard.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ApiService } from './service files/api.service';
import { NavbardComponent } from './dashboard/navbard/navbard.component';
import {MatCardModule} from '@angular/material/card';
import { NgxCaptchaModule } from 'ngx-captcha';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent,
    ForgotComponent,
    HomeComponent,
    SupportComponent,
    TimesheetComponent,
    AttendenceComponent,
    NoticeboardComponent,
    ContactComponent,
    ProfileComponent,
    NavbardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    NgxCaptchaModule,
    MatTabsModule,
    MatMenuModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
