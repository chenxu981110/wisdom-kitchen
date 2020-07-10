import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Jl2Service {
  constructor(private httpClient: HttpClient) { }
  getRecords() { 
    return this.httpClient.get('http://127.0.0.1:3000/met');//CH4(max)

  }
  getRecords1() {
    return this.httpClient.get('http://127.0.0.1:3000/met1');//CH4(min)

  }
  getRecords2() {
    return this.httpClient.get('http://127.0.0.1:3000/met2');//H2(max)

  }
  getRecords3() {
    return this.httpClient.get('http://127.0.0.1:3000/met3');//H2(min)

  }
}
