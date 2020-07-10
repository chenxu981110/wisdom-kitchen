import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { timer } from 'rxjs';
import { Observable, timer } from 'rxjs';
import { record } from './record';
import { record1 } from './record';
import { record2 } from './record';
import { record3 } from './record';
import { record4 } from './record';
import { record5 } from './record';
import { record6 } from './record';
import { record7 } from './record';

import { Jl3Service } from '../jl3.service';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ReactiveFormsModule

} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-jl3',
  templateUrl: './jl3.component.html',
  styleUrls: ['./jl3.component.css']
})
export class Jl3Component implements OnInit {
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
  //
  myForm4: FormGroup;
  records4$: Observable<record4[]>;
  record4Id: AbstractControl;
  record4Time: AbstractControl;
  //
  myForm5: FormGroup;
  records5$: Observable<record5[]>;
  record5Id: AbstractControl;
  record5Time: AbstractControl;
  //
  myForm6: FormGroup;
  records6$: Observable<record6[]>;
  record6Id: AbstractControl;
  record6Time: AbstractControl;
  //
  myForm7: FormGroup;
  records7$: Observable<record7[]>;
  record7Id: AbstractControl;
  record7Time: AbstractControl;
  constructor(private Jl3Service: Jl3Service, private fb: FormBuilder, private http: HttpClient, private router: Router) {
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
    //
    this.myForm4 = fb.group({
      'record4Id': ['', Validators.compose([Validators.required])],
      'record4Time': ['', Validators.compose([Validators.required])],
    });

    this.record4Id = this.myForm4.controls['record4Id'];
    this.record4Time = this.myForm4.controls['record4Time'];
    //
    this.myForm5 = fb.group({
      'record5Id': ['', Validators.compose([Validators.required])],
      'record5Time': ['', Validators.compose([Validators.required])],
    });

    this.record5Id = this.myForm5.controls['record5Id'];
    this.record5Time = this.myForm5.controls['record5Time'];
    //
    this.myForm6 = fb.group({
      'record6Id': ['', Validators.compose([Validators.required])],
      'record6Time': ['', Validators.compose([Validators.required])],
    });

    this.record6Id = this.myForm6.controls['record6Id'];
    this.record6Time = this.myForm6.controls['record6Time'];
    //
    this.myForm7 = fb.group({
      'record7Id': ['', Validators.compose([Validators.required])],
      'record7Time': ['', Validators.compose([Validators.required])],
    });

    this.record7Id = this.myForm7.controls['record7Id'];
    this.record7Time = this.myForm7.controls['record7Time'];
  }

  ngOnInit(): void {
    timer(0, 2000).subscribe(
      () => {
        this.records$ = <Observable<record[]>>
          this.Jl3Service.getRecords();
      }
    ),
      timer(0, 2000).subscribe(
        () => {
          this.records1$ = <Observable<record1[]>>
            this.Jl3Service.getRecords1();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records2$ = <Observable<record2[]>>
            this.Jl3Service.getRecords2();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records3$ = <Observable<record3[]>>
            this.Jl3Service.getRecords3();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records4$ = <Observable<record4[]>>
            this.Jl3Service.getRecords4();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records5$ = <Observable<record5[]>>
            this.Jl3Service.getRecords5();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records6$ = <Observable<record6[]>>
            this.Jl3Service.getRecords6();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records7$ = <Observable<record7[]>>
            this.Jl3Service.getRecords7();
        }
      )

  }

}

