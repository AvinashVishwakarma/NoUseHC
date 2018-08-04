import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AccountServicce {

  NoData: any = null;
  constructor(private _http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  Register(userData: any) {
    return this.doPostCall('Account/SignUp', userData);
  }

  Login(userData: any) {
    return this.doPostCall('Account/Login2', userData);
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

  private doPostCall(serviceUrl: string, data: any) {
    return this._http.post(this.baseUrl + serviceUrl, data, httpOptions)//, { observe: 'response' }
      .map((response: any) => response)
      .catch(this.errorHandler);
  }

  private doGetCall(serviceUrl: string) {
    return this._http.get(this.baseUrl + serviceUrl, httpOptions)
      .map((response: any) => response)
      .catch(this.errorHandler);
  }

  //Error handle function
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
