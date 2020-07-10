import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { CoComponent } from '../co/co.component';
import { Jl2Component } from '../jl2/jl2.component';




//const routes: Routes = [
export const childRoutes: Routes = [
  { path: '', redirectTo: 'co', pathMatch: 'full' },
  { path: 'co', component: CoComponent },
  { path: 'jl2', component: Jl2Component },
];



@NgModule({
  imports: [
    RouterModule.forRoot(childRoutes),


  ],
  exports: [RouterModule]
})













@Component({
  selector: 'app-zh2',
  templateUrl: './zh2.component.html',
  styleUrls: ['./zh2.component.css']
})
export class Zh2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
