import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DialogHelper } from '../CommonComponent/Widget/CommonHelper';


@Injectable({
  providedIn: 'root'
})
export class CoreComponent {
  constructor() {
  }
  
  //Error handle function
  protected errorHandler = (errorResponse: any) => {
    console.log(errorResponse);
    if (errorResponse.status == 422) {
      let errorMessage: string = "";
      for (let error of errorResponse.error.errors) {
        errorMessage = " " + errorMessage + error.message;
      }
    }
    return Observable.throw(errorResponse);
  }
}
