import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Configuration } from './config';
import { Observable } from 'rxjs/Observable';
import { ConnectService } from './connect.service';


@Injectable()
export class AuthService implements CanActivate {
usertype;
  constructor(public router1: Router, public auth: ConnectService,public httpService: Http, public UrlObject: Configuration) { }

canActivate(route: ActivatedRouteSnapshot) {
   var x = route.data;
   if (x[0].usertype == localStorage.getItem("usertype")) {
     return true;
   }
   else {
this.router1.navigate(['/login'])
     return false;

   }
 }
  details: {
    username: string,
    password: string
  }
  public data;
  public check;
  static value;


    Postlogin(details): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.UrlObject.UrlObj.VerifyUserUrl, details, headers).map(
     (res: Response) => res.json());
    }

}
