import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, Router, RouterModule} from '@angular/router';
import { HumitureComponent} from '../humiture/humiture.component';
import { RecordComponent } from '../record/record.component';



export const childRoutes: Routes = [
  { path: '', redirectTo: 'humiture', pathMatch: 'full' },
  { path: 'humiture', component: HumitureComponent },
  { path: 'record', component: RecordComponent },
];



@NgModule({
  imports: [
    RouterModule.forRoot(childRoutes),


  ],
  exports: [RouterModule]
})










@Component({
  selector: 'app-zh1',
  templateUrl: './zh1.component.html',
  styleUrls: ['./zh1.component.css']
})
export class Zh1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
