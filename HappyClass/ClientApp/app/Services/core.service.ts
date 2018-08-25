import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppSetting } from '../AppSetting';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export abstract class CoreService {
  constructor(protected _http: HttpClient) {
  }

  protected doPostCall(serviceUrl: string, data: any) {
    return this._http.post(this.getServiceURL(serviceUrl), data, httpOptions)//, { observe: 'response' }
      .pipe(
        map((response: any) => response),
        catchError(this.errorHandler)
      );
  }

  protected doPutCall(serviceUrl: string, data: any) {
    return this._http.put(this.getServiceURL(serviceUrl), data, httpOptions)
      .pipe
      (
      map((response: any) => response),
      catchError(this.errorHandler)
      );
  }

  protected doDeleteCall(serviceUrl: string) {
    return this._http.delete(this.getServiceURL(serviceUrl), httpOptions)
      .pipe
      (
      map((response: any) => response),
      catchError(this.errorHandler)
      );
  }

  protected doGetCall(serviceUrl: string) {
    return this._http.get(this.getServiceURL(serviceUrl), httpOptions)
      .pipe
      (
      map((response: any) => response),
      catchError(this.errorHandler)
      );
  }

  //Error handle function
  private errorHandler = (errorResponse: any) => {
    console.log(errorResponse);
    //if (errorResponse.status == 422) {
    //  let errorMessage: string = "";
    //  for (let error of errorResponse.error.errors) {
    //    errorMessage = " " + errorMessage + error.message;
    //  }
    //}
    return Observable.throw(errorResponse);
  }

  private getServiceURL(serviceUrl: string) {
    return AppSetting.baseURL + serviceUrl;
  }
}
