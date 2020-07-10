import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoggedInGuard } from './loggedln.guard';

import { AuthService } from './auth.service';
import { DeviceComponent } from './device/device.component';
import { HumitureComponent } from './humiture/humiture.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SmokeComponent } from './smoke/smoke.component';
import { CoComponent } from './co/co.component';
import { RecordComponent } from './record/record.component';

import { UserlistComponent } from './userlist/userlist.component';
import { IntroduceComponent } from './introduce/introduce.component';

import { LoggedIn1Guard } from './loggedln1.guard';

import { Zh1Component } from './zh1/zh1.component';
import { Zh2Component } from './zh2/zh2.component';
import { Zh3Component } from './zh3/zh3.component';
import { Jl2Component } from './jl2/jl2.component';
import { Jl3Component } from './jl3/jl3.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    AboutComponent,
    DeviceComponent,
    HumitureComponent,
    SmokeComponent,
    CoComponent,
    RecordComponent,
    UserlistComponent,
    IntroduceComponent,
    Zh1Component,
    Zh2Component,
    Zh3Component,
    Jl2Component,
    Jl3Component,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEchartsModule
   
    
    //AuthService
     
  ],
  providers: [
    LoggedInGuard,
    LoggedIn1Guard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
