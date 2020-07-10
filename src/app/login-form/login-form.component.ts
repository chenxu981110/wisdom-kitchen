import { Component,OnInit} from '@angular/core';

import{
FormBuilder,
FormGroup,
AbstractControl,
Validators,
ReactiveFormsModule

}from'@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//
import { Auth1Service } from '../auth1.service';






@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers:[],
  
  
})
export class LoginFormComponent implements OnInit {
  
 
 
  
  myForm1: FormGroup;
  myForm:FormGroup;
  userName:AbstractControl;
   password:AbstractControl;
  email: AbstractControl;
  gender: AbstractControl;
  city : AbstractControl;
  // loginFailed :boolean;
   //error:string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthService, private auth1: Auth1Service) 
  {
    this.myForm = fb.group({
      'userName': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
      'gender': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
    });

    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    this.email = this.myForm.controls['email'];
    this.gender = this.myForm.controls['gender'];
    this.city = this.myForm.controls['city'];

    //this.loginFailed = false;






    this.myForm1 = fb.group({
      'userName': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
    });

    this.userName = this.myForm1.controls['userName'];
    this.password = this.myForm1.controls['password'];
   }

ngOnInit():void {
 
}



//root登录
  onSubmit1(value) {
    if (!this.userName.valid) {
      alert("请输入用户名");
    }
    else if (!this.password.valid) {
      alert("请输入密码")
      return;

    }
    //赋值给userName.
    this.auth1.userName = value.userName;
    console.log(value);
    this.auth1.login1(value);
  }








onSubmit(value) {
  if (!this.userName.valid) {
    alert("请输入用户名");
  }
  else if (!this.password.valid) {
    alert("请输入密码")
    return;

  }
  //赋值给userName.
  this.auth.userName = value.userName;
   console.log(value);
  this.auth.login(value);
}

Add(value) {
  this.http.post('http://172.20.10.2:3000/register/' + value.userName + '/' + value.password + '/' + value.email + '/' + value.gender + '/' + value.city, JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.succ) {

          alert('注册成功！');
        }
        else {
          alert('注册失败');
        }
      }
    );

  }
}

/*
submit(value){
  console.log(value);
  this.auth.userName = value.userName;
    this.auth.login(value, function () {
      this.router.navigate(['/home']);
    }.bind(this));
  }

}*?
/*
onSubmit(value : any):void{
  if(!this.myForm.valid){
    alert('登录无效，请检查！');
    return;
  }
  //判断有效无效
  console.log('you submitted value:',value);



  //闭包，var/let
  //var myRouter = this.router;
this.auth.userName = value.username;
  this.auth.login(value,function(){
    this.router.navigate(['/home'])
    
  //  myRouter.navigate(['/home']);
  }.bind(this));
*/

  /*this.httpclient.get('http://127.0.0.1:8082/login').subscribe(
    (resp: any) => {
      console.log(resp);
      let u = resp[0];
      let o = value;
      if(u.username == o['username'] && u.password == o['password']){
        alert('登录成功！');
      }
      else {
     alert('登录失败！');
      }
    }
  )；*/

 /* this.httpclient.post('http://127.0.0.1:8082/login',JSON.stringify(value)).subscribe(
    (resp:any) =>{
      console.log(resp);
      if (resp.success){
        
        alert('登录成功！');
      }
      else{
        alert('登录失败');
      }
    }
  );
}*/

