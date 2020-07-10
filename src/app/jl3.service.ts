import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Jl3Service {
  constructor(private httpClient: HttpClient) { }
  getRecords() {
    return this.httpClient.get('http://127.0.0.1:3000/car');//CO(max)

  }
  getRecords1() {
    return this.httpClient.get('http://127.0.0.1:3000/car1');//CO(min)

  }
  getRecords2() {
    return this.httpClient.get('http://127.0.0.1:3000/car2');//SO2(max)

  }
  getRecords3() {
    return this.httpClient.get('http://127.0.0.1:3000/car3');//SO2(min)

  }
  getRecords4() {
    return this.httpClient.get('http://127.0.0.1:3000/car4');//N2(max)

  }
  getRecords5() {
    return this.httpClient.get('http://127.0.0.1:3000/car5');//N2(min)

  }
  getRecords6() {
    return this.httpClient.get('http://127.0.0.1:3000/car6');//NH4(max)

  }
  getRecords7() {
    return this.httpClient.get('http://127.0.0.1:3000/car7');//NH4(min)

  }
}
