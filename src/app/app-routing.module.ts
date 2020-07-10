import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent, childRoutes } from './home/home.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoggedInGuard } from './loggedln.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LoggedIn1Guard } from './loggedln1.guard';
import { Zh1Component } from './zh1/zh1.component';
import { SmokeComponent } from './smoke/smoke.component';
import { DeviceComponent } from './device/device.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { Zh2Component } from './zh2/zh2.component';
import { HumitureComponent } from './humiture/humiture.component';
import { RecordComponent } from './record/record.component';
import { CoComponent } from './co/co.component';
import { Jl2Component } from './jl2/jl2.component';
import { Zh3Component } from './zh3/zh3.component';
import { Jl3Component } from './jl3/jl3.component';



/*const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard], children: childRoutes},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginFormComponent},
  { path: 'userlist', component: UserlistComponent, canActivate: [LoggedIn1Guard]},
];
*/
/*
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard], 
children:[
  { path: '', redirectTo: 'zh1', pathMatch: 'full' },
  {path: 'zh1', component: Zh1Component,
           children:[
          { path: '', redirectTo: 'humiture', pathMatch: 'full' },
          { path: 'humiture', component: HumitureComponent },
          { path: 'jl1', component: Jl1Component },
                      ]
},
  { path: 'co', component: CoComponent },
  { path: 'smoke', component: SmokeComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'record', component: RecordComponent },
  { path: 'logout', component: LoginFormComponent },
  { path: 'introduce', component: IntroduceComponent },
]
},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'userlist', component: UserlistComponent, canActivate: [LoggedIn1Guard] },
];
children: childRoutes*/
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, canActivate: [LoggedInGuard],
    children: [
      { path: '', redirectTo: 'zh1', pathMatch: 'full' },
      { path: 'zh1', component: Zh1Component,
      children:[
        { path: '', redirectTo: 'humiture', pathMatch: 'full' },
        { path: 'humiture', component: HumitureComponent },
        { path: 'record', component: RecordComponent },
      ]
    },
      { path: 'zh2', component: Zh2Component,
        children: [
          { path: '', redirectTo: 'co', pathMatch: 'full' },
          { path: 'co', component: CoComponent },
          { path: 'jl2', component: Jl2Component },
        ]
    },
      {
        path: 'zh3', component: Zh3Component,
        children: [
          { path: '', redirectTo: 'smoke', pathMatch: 'full' },
          { path: 'smoke', component: SmokeComponent },
          { path: 'jl3', component: Jl3Component },
        ]
      },
      { path: 'device', component: DeviceComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'logout', component: LoginFormComponent },
      
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'userlist', component: UserlistComponent, canActivate: [LoggedIn1Guard] },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
