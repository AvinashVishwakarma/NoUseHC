import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(protected _http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) {
  }

  protected doPostCall(serviceUrl: string, data: any) {
    return this._http.post(this.baseUrl + serviceUrl, data, httpOptions)//, { observe: 'response' }
      .pipe(
        map((response: any) => response),
        catchError(this.errorHandler)
      );
  }

  protected doPutCall(serviceUrl: string, data: any) {
    return this._http.put(this.baseUrl + serviceUrl, data, httpOptions)
      .pipe
      (
      map((response: any) => response),
      catchError(this.errorHandler)
      );
  }

  protected doDeleteCall(serviceUrl: string) {
    return this._http.delete(this.baseUrl + serviceUrl, httpOptions)
      .pipe
      (
      map((response: any) => response),
      catchError(this.errorHandler)
      );
  }

  protected doGetCall(serviceUrl: string) {
    return this._http.get(this.baseUrl + serviceUrl, httpOptions)
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
    return this.baseUrl + serviceUrl;
  }
}
