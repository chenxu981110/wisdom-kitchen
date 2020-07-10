import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private httpClient: HttpClient) { }
  getRecords() {
    return this.httpClient.get('http://127.0.0.1:3000/env');

  }
  getRecords1() {
    return this.httpClient.get('http://127.0.0.1:3000/env1');

  }
  getRecords2() {
    return this.httpClient.get('http://127.0.0.1:3000/env2');

  }
  getRecords3() {
    return this.httpClient.get('http://127.0.0.1:3000/env3');

  }
  
}
