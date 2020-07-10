import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUsers() {
    return this.httpClient.get('http://127.0.0.1:3000/user');

  }
  /*
    changeDevice(id, status) {
      return this.httpClient.post('http://127.0.0.1:3000/device/' + id + '/' + status, {});
    }*/
  getuser(userName) {
    return this.httpClient.get('http://127.0.0.1:3000/user/' + userName);
  }
  changeUser(userName, password) {
    return this.httpClient.post('http://127.0.0.1:3000/moduser/' + userName + '/' + password, {});
  }
}
