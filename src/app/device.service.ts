import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { }
  getDevices() {
    return this.httpClient.get('http://127.0.0.1:3000/device' );

  }
  getDevices1() {
    return this.httpClient.get('http://127.0.0.1:3000/device1');

  }
  getDevices2() {
    return this.httpClient.get('http://127.0.0.1:3000/device2');

  }
  getDevices3() {
    return this.httpClient.get('http://127.0.0.1:3000/device3');

  }
  getDevices4() {
    return this.httpClient.get('http://127.0.0.1:3000/device4');

  }
/*
  changeDevice(id, status) {
    return this.httpClient.post('http://127.0.0.1:3000/device/' + id + '/' + status, {});
  }*/
  getdevice(deviceId){
    return this.httpClient.get('http://127.0.0.1:3000/device/' + deviceId);
  }
  changeDevice(deviceId, deviceName) {
    return this.httpClient.post('http://127.0.0.1:3000/device/' + deviceId + '/' + deviceName, {});
  }
  //1
  getdevice1(device1Id) {
    return this.httpClient.get('http://127.0.0.1:3000/device1/' + device1Id);
  }
  changeDevice1(device1Id, device1Name) {
    return this.httpClient.post('http://127.0.0.1:3000/device1/' + device1Id + '/' + device1Name, {});
  }
  //2
  getdevice2(device2Id) {
    return this.httpClient.get('http://127.0.0.1:3000/device2/' + device2Id);
  }
  changeDevice2(device2Id, device2Name) {
    return this.httpClient.post('http://127.0.0.1:3000/device2/' + device2Id + '/' + device2Name, {});
  }
  //3
  getdevice3(device3Id) {
    return this.httpClient.get('http://127.0.0.1:3000/device3/' + device3Id);
  }
  changeDevice3(device3Id, device3Name) {
    return this.httpClient.post('http://127.0.0.1:3000/device3/' + device3Id + '/' + device3Name, {});
  }
  //4
  getdevice4(device4Id) {
    return this.httpClient.get('http://127.0.0.1:3000/device4/' + device4Id);
  }
  changeDevice4(device4Id, device4Name) {
    return this.httpClient.post('http://127.0.0.1:3000/device4/' + device4Id + '/' + device4Name, {});
  }
}
