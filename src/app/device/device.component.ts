import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { device } from './device';
import { device1 } from './device';
import { device2 } from './device';
import { device3 } from './device';
import { device4 } from './device';
import { DeviceService } from '../device.service';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ReactiveFormsModule

} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers: []
})

export class DeviceComponent implements OnInit {
  
  devices$: Observable<device[]>;
  myForm: FormGroup;
  deviceId: AbstractControl;
  deviceName: AbstractControl;
  //1
  devices1$: Observable<device1[]>;
  myForm1: FormGroup;
  device1Id: AbstractControl;
  device1Name: AbstractControl;
  //2
  devices2$: Observable<device2[]>;
  myForm2: FormGroup;
  device2Id: AbstractControl;
  device2Name: AbstractControl;
  //3
  devices3$: Observable<device3[]>;
  myForm3: FormGroup;
  device3Id: AbstractControl;
  device3Name: AbstractControl;
  //4
  devices4$: Observable<device4[]>;
  myForm4: FormGroup;
  device4Id: AbstractControl;
  device4Name: AbstractControl;

  constructor(private DeviceService: DeviceService, private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.myForm = fb.group({
      'deviceId': ['', Validators.compose([Validators.required])],
      'deviceName': ['', Validators.compose([Validators.required])],
    });

    this.deviceId = this.myForm.controls['deviceId'];
    this.deviceName = this.myForm.controls['deviceName'];
    //1
    this.myForm1 = fb.group({
      'device1Id': ['', Validators.compose([Validators.required])],
      'device1Name': ['', Validators.compose([Validators.required])],
    });

    this.device1Id = this.myForm1.controls['device1Id'];
    this.device1Name = this.myForm1.controls['device1Name'];
    //2
    this.myForm2 = fb.group({
      'device2Id': ['', Validators.compose([Validators.required])],
      'device2Name': ['', Validators.compose([Validators.required])],
    });

    this.device2Id = this.myForm2.controls['device2Id'];
    this.device2Name = this.myForm2.controls['device2Name'];
    //3
    this.myForm3 = fb.group({
      'device3Id': ['', Validators.compose([Validators.required])],
      'device3Name': ['', Validators.compose([Validators.required])],
    });

    this.device3Id = this.myForm3.controls['device3Id'];
    this.device3Name = this.myForm3.controls['device3Name'];
    //4
    this.myForm4 = fb.group({
      'device4Id': ['', Validators.compose([Validators.required])],
      'device4Name': ['', Validators.compose([Validators.required])],
    });

    this.device4Id = this.myForm4.controls['device4Id'];
    this.device4Name = this.myForm4.controls['device4Name'];
  }
  ngOnInit(): void {
    timer(0, 6000).subscribe(
      () => {
    this.devices$ = <Observable<device[]>>
      this.DeviceService.getDevices();
      }
    )
    //1
    timer(0, 6000).subscribe(
      () => {
        this.devices1$ = <Observable<device1[]>>
          this.DeviceService.getDevices1();
      }
    )
    //2
    timer(0, 6000).subscribe(
      () => {
        this.devices2$ = <Observable<device2[]>>
          this.DeviceService.getDevices2();
      }
    )
    //3
    timer(0, 6000).subscribe(
      () => {
        this.devices3$ = <Observable<device3[]>>
          this.DeviceService.getDevices3();
      }
    )
    //4
    timer(0, 6000).subscribe(
      () => {
        this.devices4$ = <Observable<device4[]>>
          this.DeviceService.getDevices4();
      }
    )
  }





  changeDevice(device: device) {
    this.DeviceService.changeDevice(device.id, device.customer_status === 0 ? 1 : 0).subscribe((value: any) => {
      if (value.succ) {
        alert('修改成功!');
        if(device.customer_status == 1){
          device.customer_status =0;
          device.status =0;
        }else{
          device.customer_status = 1;
          device.status = 1;
        }
      }else{
        alert('修改失败');
      }
    });
  }
  onAdd(value) {
    this.http.post('http://172.20.10.2:3000/adddevice/'+value.deviceId+'/'+value.deviceName, JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.succ) {
        this.ngOnInit();
          alert('添加成功！');
        }
        else {
          alert('添加失败');
        }
      }
    );
   
  }
  onUpdate(value){
    this.http.post('http://172.20.10.2:3000/moddevice/' + value.deviceId + '/' + value.deviceName, JSON.stringify(value)).subscribe(
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
  onDel(value){
    this.http.post('http://172.20.10.2:3000/deldevice/' + value.deviceId , JSON.stringify(value)).subscribe(
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
  onList(value){
    this.devices$ = <Observable<device[]>>
      this.DeviceService.getdevice(value.deviceId);
  }
//1
  changeDevice1(device1: device1) {
    this.DeviceService.changeDevice1(device1.id, device1.customer_status === 0 ? 1 : 0).subscribe((value: any) => {
      if (value.succ) {
        alert('修改成功!');
        if (device1.customer_status == 1) {
          device1.customer_status = 0;
          device1.status = 0;
        } else {
          device1.customer_status = 1;
          device1.status = 1;
        }
      } else {
        alert('修改失败');
      }
    });
  }
  onAdd1(value) {
    this.http.post('http://172.20.10.2:3000/adddevice1/' + value.device1Id + '/' + value.device1Name, JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.succ) {
          this.ngOnInit();
          alert('添加成功！');
        }
        else {
          alert('添加失败');
        }
      }
    );

  }
  onUpdate1(value) {
    this.http.post('http://172.20.10.2:3000/moddevice1/' + value.device1Id + '/' + value.device1Name, JSON.stringify(value)).subscribe(
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
  onDel1(value) {
    this.http.post('http://172.20.10.2:3000/deldevice1/' + value.device1Id, JSON.stringify(value)).subscribe(
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
  onList1(value) {
    this.devices1$ = <Observable<device1[]>>
      this.DeviceService.getdevice1(value.device1Id);
  }
  //2
  changeDevice2(device2: device2) {
    this.DeviceService.changeDevice2(device2.id, device2.customer_status === 0 ? 1 : 0).subscribe((value: any) => {
      if (value.succ) {
        alert('修改成功!');
        if (device2.customer_status == 1) {
          device2.customer_status = 0;
          device2.status = 0;
        } else {
          device2.customer_status = 1;
          device2.status = 1;
        }
      } else {
        alert('修改失败');
      }
    });
  }
  onAdd2(value) {
    this.http.post('http://172.20.10.2:3000/adddevice2/' + value.device2Id + '/' + value.device2Name, JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.succ) {
          this.ngOnInit();
          alert('添加成功！');
        }
        else {
          alert('添加失败');
        }
      }
    );

  }
  onUpdate2(value) {
    this.http.post('http://172.20.10.2:3000/moddevice2/' + value.device2Id + '/' + value.device2Name, JSON.stringify(value)).subscribe(
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
  onDel2(value) {
    this.http.post('http://172.20.10.2:3000/deldevice2/' + value.device2Id, JSON.stringify(value)).subscribe(
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
  onList2(value) {
    this.devices2$ = <Observable<device2[]>>
      this.DeviceService.getdevice2(value.device2Id);
  }
  //3
  changeDevice3(device3: device3) {
    this.DeviceService.changeDevice3(device3.id, device3.customer_status === 0 ? 1 : 0).subscribe((value: any) => {
      if (value.succ) {
        alert('修改成功!');
        if (device3.customer_status == 1) {
          device3.customer_status = 0;
          device3.status = 0;
        } else {
          device3.customer_status = 1;
          device3.status = 1;
        }
      } else {
        alert('修改失败');
      }
    });
  }
  onAdd3(value) {
    this.http.post('http://172.20.10.2:3000/adddevice3/' + value.device3Id + '/' + value.device3Name, JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.succ) {
          this.ngOnInit();
          alert('添加成功！');
        }
        else {
          alert('添加失败');
        }
      }
    );

  }
  onUpdate3(value) {
    this.http.post('http://172.20.10.2:3000/moddevice3/' + value.device3Id + '/' + value.device3Name, JSON.stringify(value)).subscribe(
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
  onDel3(value) {
    this.http.post('http://172.20.10.2:3000/deldevice3/' + value.device3Id, JSON.stringify(value)).subscribe(
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
  onList3(value) {
    this.devices3$ = <Observable<device3[]>>
      this.DeviceService.getdevice3(value.device3Id);
  }
  //4
  changeDevice4(device4: device4) {
    this.DeviceService.changeDevice4(device4.id, device4.customer_status === 0 ? 1 : 0).subscribe((value: any) => {
      if (value.succ) {
        alert('修改成功!');
        if (device4.customer_status == 1) {
          device4.customer_status = 0;
          device4.status = 0;
        } else {
          device4.customer_status = 1;
          device4.status = 1;
        }
      } else {
        alert('修改失败');
      }
    });
  }
  onAdd4(value) {
    this.http.post('http://172.20.10.2:3000/adddevice4/' + value.device4Id + '/' + value.device4Name, JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.succ) {
          this.ngOnInit();
          alert('添加成功！');
        }
        else {
          alert('添加失败');
        }
      }
    );

  }
  onUpdate4(value) {
    this.http.post('http://172.20.10.2:3000/moddevice4/' + value.device4Id + '/' + value.device4Name, JSON.stringify(value)).subscribe(
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
  onDel4(value) {
    this.http.post('http://172.20.10.2:3000/deldevice4/' + value.device4Id, JSON.stringify(value)).subscribe(
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
  onList4(value) {
    this.devices4$ = <Observable<device4[]>>
      this.DeviceService.getdevice4(value.device4Id);
  }
}
