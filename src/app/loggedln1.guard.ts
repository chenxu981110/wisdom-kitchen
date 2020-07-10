import { CanActivate } from '@angular/router';
import { Auth1Service } from './auth1.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedIn1Guard implements CanActivate {
    constructor(private auth1: Auth1Service) {

    }

    canActivate(): boolean {
        if (!this.auth1.isLoggedIn1()) {
            alert('请先登录！');
        }
        return this.auth1.isLoggedIn1();
    }
}