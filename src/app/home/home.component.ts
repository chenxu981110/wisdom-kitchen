import { Component, OnInit, NgModule } from '@angular/core';
import {Routes, Router, RouterModule} from '@angular/router';

import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../auth.service';
import { DeviceComponent } from '../device/device.component';

import { CoComponent } from '../co/co.component';
import { SmokeComponent } from '../smoke/smoke.component';
import { IntroduceComponent } from '../introduce/introduce.component';

//
import { Zh1Component } from '../zh1/zh1.component';
import { Zh2Component} from '../zh2/zh2.component';
import { Jl2Component } from '../jl2/jl2.component';
import { HumitureComponent } from '../humiture/humiture.component';
import { RecordComponent } from '../record/record.component';
import { Zh3Component } from '../zh3/zh3.component';
import { Jl3Component } from '../jl3/jl3.component';


/*
export const childRoutes: Routes = [
 
  { path: '', redirectTo:'zh1',pathMatch:'full'}, 
  { path: 'zh1', component: Zh1Component,
  children:[
    { path: 'humiture', component: HumitureComponent },
    { path: 'jl1', component: Jl1Component },
  ]
  },
  {path:'co',component:CoComponent},
  {path:'smoke',component:SmokeComponent},
  { path: 'device', component: DeviceComponent },
  {path:'record',component:RecordComponent},
  {path:'logout',component:LoginFormComponent},
  { path: 'introduce', component: IntroduceComponent },
];
*/
//const routes: Routes = [
export const childRoutes: Routes = [
  { path: '', redirectTo: 'zh1', pathMatch: 'full' },
  { path: 'zh1', component: Zh1Component, 
    children: [
      { path: '', redirectTo: 'humiture', pathMatch: 'full' },
      { path: 'humiture', component: HumitureComponent },
      { path: 'record', component: RecordComponent },
    ]

},
  { path: 'zh2', component: Zh2Component, 
children:[
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(childRoutes),
  ],
  exports: [RouterModule]
})










@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



  
export class HomeComponent implements OnInit {
  menuIndex=2;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
menuClicked(index){
  this.menuIndex= index;

   if(index == 2){
    this.router.navigate(['/home/zh1']);
  }
   else if (index == 1) {
     this.router.navigate(['/home/device']);

   }
  else if (index == 3) {
    this.router.navigate(['/home/introduce']);
  }
  else if(index == 7){
    this.router.navigate(['/home/zh2']);
  }
  else if(index == 8){
    this.router.navigate(['/home/zh3']);
  }
  else if(index == 6){
    this.auth.logout();
    alert('您已经登出！');
    this.router.navigate(['/login']);
  }
 
}
}
