import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../CommonComponent/Validation/validation.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AccountServicce } from '../../../Services/AccountService';
import { HttpRequest, HttpHandler, HttpClient, HttpInterceptor, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DialogHelper } from '../../../CommonComponent/Widget/CommonHelper';

@Component({
  selector: 'app-reset',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.css']
})


export class ResetPasswordComponent implements OnInit {
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  public ErrorMessages: any;
  constructor(private router: Router,
    private fb: FormBuilder, public http: HttpClient, private accountService: AccountServicce, private dh: DialogHelper) {
    //this.http = Http;
  }

  ngOnInit() {
    this.form = this.fb.group({
      currentPassword: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, ValidationService.passwordValidator])],
      confirmPassword: ['', Validators.compose([Validators.required])]
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
      let progressDialog = this.dh.showProgress();
      this.accountService.ChangePassword(this.form.value)
        .subscribe(
          result => {
            this.dh.hideProgress(progressDialog);
            if (result.isSuccess) {
              this.dh.success("Password changed successfully");
              this.router.navigate(['/home']);
            }
            else {
              this.dh.error(result.errormessage[0]);
              //this.ErrorMessages.push(result.errormessage[0]);
            }
          },
          errorResponse => {
            this.dh.hideProgress(progressDialog);
            console.log(errorResponse);
            if (errorResponse.status = 422) {
              //this.ErrorMessages.push(errorResponse.error.errors[0].message);
              this.dh.error(errorResponse.error.errors[0].message);
            }
          }
        );

    }
  }
}


