import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { user } from './user';
import { UserService } from '../user.service';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ReactiveFormsModule

} from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';















@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})









export class UserlistComponent implements OnInit {






  users$: Observable<user[]>;
  
  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  email: AbstractControl;
  gender: AbstractControl;
  city: AbstractControl;

  constructor(private UserService: UserService, private fb: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthService) { 
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
  }

  ngOnInit() {
    timer(0,6000).subscribe(
      () => {
    this.users$ = <Observable<user[]>>
      this.UserService.getUsers();
  }
    )
}
  //修改
  Update(value) {
    this.http.post('http://172.20.10.2:3000/moduser/' + value.userName + '/' + value.password, JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.succ) {
          this.ngOnInit();
          alert('修改成功！');
        }
        else {
          alert('修改失败');
        }
      }
    );

  }
  //删除
  Del(value) {
    this.http.post('http://172.20.10.2:3000/deluser/' + value.userName, JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.succ) {
          this.ngOnInit();
          alert('删除成功！');
        }
        else {
          alert('删除失败');
        }
      }
    );
  }

  //查询
  
  List(value) {
    this.users$ = <Observable<user[]>>
      this.UserService.getuser(value.userName);
  }
  

  


  
  

}
