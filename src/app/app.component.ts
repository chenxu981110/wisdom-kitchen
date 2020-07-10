import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {Routes, Router} from '@angular/router';



//
import { Auth1Service } from './auth1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '智能厨房app';
  menuIndex=6;
  constructor(private router: Router, private auth: AuthService, private auth1: Auth1Service){
    
  }
  ngOnInit() {
  }
menuClicked(index){
  this.menuIndex= index;
   if(index == 6){
    this.auth.logout();
    alert('您已经登出！');
    this.router.navigate(['/login']);
  }
}


  logout() {
    this.auth1.logout1();
    alert('您已经登出！');
    this.router.navigate(['/login']);
  }



}
