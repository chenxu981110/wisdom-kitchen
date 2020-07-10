import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  /*是否已经登录 */
private loggedIn =false;
  userName: string;


  constructor(private httpclient:HttpClient, private router: Router) { }


  login(u){
/*login(user:string,password:string):boolean{
    let u ={
      usern  ame:user，
      password:password
    }；*/
    this.httpclient.post('http://172.20.10.2:3000/user/'+u.userName+'/'+u.password,JSON.stringify(u)).subscribe(

      (resp:any) =>{
        console.log(resp);
        if (resp.succ){
          this.loggedIn=true;
          this.router.navigate(['/home']);
          alert("登录成功");
        }
        else{
          this.loggedIn=false;
          alert("登录失败");
        }
      }
    );
  }
  logout(){
   this.loggedIn = false;
  }
  isLoggedIn():boolean{
  return this.loggedIn;
  }
}

