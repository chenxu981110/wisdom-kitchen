import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { timer } from 'rxjs';
import { Observable, timer } from 'rxjs';
import { record } from './record';
import { record1 } from './record';
import { record2 } from './record';
import { record3 } from './record';
import { RecordService } from '../record.service';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ReactiveFormsModule

} from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../auth.service';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  //public chartOption: any;

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
  constructor(private RecordService: RecordService, private fb: FormBuilder, private http: HttpClient, private router: Router) {
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
          this.RecordService.getRecords();
      }
    ),
      timer(0, 2000).subscribe(
        () => {
          this.records1$ = <Observable<record1[]>>
            this.RecordService.getRecords1();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records2$ = <Observable<record2[]>>
            this.RecordService.getRecords2();
        }
      ),
      timer(0, 2000).subscribe(
        () => {
          this.records3$ = <Observable<record3[]>>
            this.RecordService.getRecords3();
        }
      )

  }

  /*ngOnInit() {

    /*this.chartOption = {
      backgroundColor: '#2c343c',

      title: {
        text: '事项记录',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },

      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '报警原因',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '烟雾浓度过高'},
            { value: 310, name: '温度过高/低'},
            { value: 274, name: '湿度过高/低' },
            { value: 235, name: 'H2浓度过高' },
            { value: 400, name: 'CH4浓度过高' }
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    }
  }*/


}

