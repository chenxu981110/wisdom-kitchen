import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { SmokeComponent } from '../smoke/smoke.component';
import { Jl3Component } from '../jl3/jl3.component';



export const childRoutes: Routes = [
  { path: '', redirectTo: 'smoke', pathMatch: 'full' },
  { path: 'smoke', component: SmokeComponent },
  { path: 'jl3', component: Jl3Component },
];


@NgModule({
  imports: [
    RouterModule.forRoot(childRoutes),


  ],
  exports: [RouterModule]
})








@Component({
  selector: 'app-zh3',
  templateUrl: './zh3.component.html',
  styleUrls: ['./zh3.component.css']
})
export class Zh3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
