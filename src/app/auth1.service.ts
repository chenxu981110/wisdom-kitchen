import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {
  /*是否已经登录 */
  private loggedIn1 = false;
  userName: string;
  constructor(private httpclient: HttpClient, private router: Router) { }


  login1(u) {
    /*login(user:string,password:string):boolean{
        let u ={
          usern  ame:user，
          password:password
        }；*/
    this.httpclient.post('http://172.20.10.2:3000/root/' + u.userName + '/' + u.password, JSON.stringify(u)).subscribe(

      (resp: any) => {
        console.log(resp);
        if (resp.succ) {
          this.loggedIn1 = true;
          this.router.navigate(['/userlist']);
          alert("登录成功");
        }
        else {
          this.loggedIn1 = false;
          alert("登录失败");
        }
      }
    );
  }
  logout1() {
    this.loggedIn1 = false;
  }
  isLoggedIn1(): boolean {
    return this.loggedIn1;
  }
}

