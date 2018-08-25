import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../CommonComponent/Validation/validation.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AccountServicce } from '../../../Services/AccountService';
import { HttpRequest, HttpHandler, HttpClient, HttpInterceptor, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppSetting } from '../../../AppSetting';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  public ErrorMessages: any;
  constructor(public router: Router,
    private fb: FormBuilder, public http: HttpClient
    , @Inject('AntiForgeryToken') public anti: string, private accountService: AccountServicce) {
    //this.http = Http;
  }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      Email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      Password: ['', Validators.compose([Validators.required])],
      RememberMe: ['false'],
      returnUrl: [''],
      __RequestVerificationToken: [this.anti]
    });
  }

  isFieldInvalid(field: string) { // {6}
    //console.log(field);
    //console.log(this.form.get(field));
    var a = this.form.get(field);
    if (a != null)
      return (
        (a.valid && a.touched) ||
        (a.untouched && this.formSubmitAttempt)
      );
    return true;
  }

  onSubmit() {
    this.formSubmitAttempt = true;
    this.ErrorMessages = [];
    //debugger;
    if (this.form.valid) {
      this.accountService.Login(this.form.value)
        .subscribe(
          result => {
            if (result.isSuccess) {
              location.href = AppSetting.baseURL;
              //location.reload();
            }
            else {
              this.ErrorMessages.push(result.errormessage[0]);
            }
          },
          errorResponse => {
            console.log(errorResponse);
            if (errorResponse.status = 422) {
              this.ErrorMessages.push(errorResponse.error.errors[0].message);
            }
          }
        );

    }
  }


}


