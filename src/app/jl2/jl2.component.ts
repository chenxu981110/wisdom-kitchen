import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { timer } from 'rxjs';
import { Observable, timer } from 'rxjs';
import { record } from './record';
import { record1 } from './record';
import { record2 } from './record';
import { record3 } from './record';
import { Jl2Service } from '../jl2.service';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ReactiveFormsModule

} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-jl2',
  templateUrl: './jl2.component.html',
  styleUrls: ['./jl2.component.css']
})


export class Jl2Component implements OnInit {
  records$: Observable<record[]>;
  myForm: FormGroup;
  recordId: AbstractControl;
  recordTime: AbstractControl;
  //
  myForm1: FormGroup;
  records1$: Observable<record1[]>;
  record1Id: AbstractControl;
  record1Time: AbstractControl;
  //
  myForm2: FormGroup;
  records2$: Observable<record2[]>;
  record2Id: AbstractControl;
  record2Time: AbstractControl;
  //
  myForm3: FormGroup;
  records3$: Observable<record3[]>;
  record3Id: AbstractControl;
  record3Time: AbstractControl;
  constructor(private Jl2Service: Jl2Service, private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.myForm = fb.group({
      'recordId': ['', Validators.compose([Validators.required])],
      'recordTime': ['', Validators.compose([Validators.required])],
    });

    this.recordId = this.myForm.controls['recordId'];
    this.recordTime = this.myForm.controls['recordTime'];
    //
    this.myForm1 = fb.group({
      'record1Id': ['', Validators.compose([Validators.required])],
      'record1Time': ['', Validators.compose([Validators.required])],
    });

    this.record1Id = this.myForm1.controls['record1Id'];
    this.record1Time = this.myForm1.controls['record1Time'];
    //
    this.myForm2 = fb.group({
      'record2Id': ['', Validators.compose([Validators.required])],
      'record2Time': ['', Validators.compose([Validators.required])],
    });

    this.record2Id = this.myForm2.controls['record2Id'];
    this.record2Time = this.myForm2.controls['record2Time'];
    //
    this.myForm3 = fb.group({
      'record3Id': ['', Validators.compose([Validators.required])],
      'record3Time': ['', Validators.compose([Validators.required])],
    });

    this.record3Id = this.myForm3.controls['record3Id'];
    this.record3Time = this.myForm3.controls['record3Time'];
  }

  ngOnInit(): void {
    timer(0, 2000).subscribe(
      () => {
        this.records$ = <Observable<record[]>>
          this.Jl2Service.getRecords();
      }
    ),
      timer(0, 2000).subscribe(
        () => {
          this.records1$ = <Observable<record1[]>>
            this.Jl2Service.getRecords1();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records2$ = <Observable<record2[]>>
            this.Jl2Service.getRecords2();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records3$ = <Observable<record3[]>>
            this.Jl2Service.getRecords3();
        }
      )

  }

}
