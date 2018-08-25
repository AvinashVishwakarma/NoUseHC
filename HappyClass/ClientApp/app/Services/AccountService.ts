import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { HttpHeaders } from "@angular/common/http";
import { CoreService } from "./core.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AccountServicce extends CoreService {

  NoData: any = null;
  //constructor(private _http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  //  super(_http, baseUrl);
  //}

  Register(userData: any) {
    return this.doPostCall('Account/SignUp', userData);
  }

  Login(userData: any) {
    return this.doPostCall('Account/Login', userData);
  }

  Logout() {
    return this.doPostCall('Account/SignOut', this.NoData);
  }

  ChangePassword(data: any) {
    return this.doPostCall('Account/ChangePassword', data);
  }

  GetUserData() {
    return this.doPostCall('Account/GetUserDetail', this.NoData);
  }

}
