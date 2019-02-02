import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../CommonComponent/Validation/validation.service';
import { Router } from '@angular/router';
import { AccountServicce } from '../../../Services/AccountService';
import { DialogHelper } from '../../../CommonComponent/Widget/CommonHelper';
//import { MatFileUpload } from 'angular-material-fileupload';
import { HttpRequest, HttpClient, HttpEventType } from '@angular/common/http';
import { FileUploadService } from '../../../Services/FileUploadService';
import { HttpSentEvent } from '@angular/common/http/src/response';
import { CoreComponent } from '../../core.componentService';
import { AppSetting } from '../../../AppSetting';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent extends CoreComponent implements OnInit  {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  public ErrorMessages: any;
  public showPasswordReset: boolean;
  public firstName: string;

  constructor(public router: Router,
    private fb: FormBuilder,
    private accountService: AccountServicce,
    private fileUploadService: FileUploadService,
    @Inject('AntiForgeryToken') private anti: string, private dh: DialogHelper, private http: HttpClient) {
    super();
  }

  public progress: number;
  public message: string;
  upload(files: any) {
    debugger;
    if (files.length === 0)
      return;

    this.fileUploadService.UploadFiles('Account/UploadFile2', files).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / (event.total ? event.total : 1));
      else if (event.type === HttpEventType.Response)
        this.message = (event.body ? event.body : 'No message found ').toString();
    });
  }

  ngOnInit() {

    this.getUserDetail();
    this.form = this.fb.group({
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(3), ValidationService.firstnameValidator])],
      lastname: ['', Validators.compose([Validators.minLength(3), ValidationService.lastnameValidator])],//, ValidationService.alphabetValidator
      email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      MobileNumber: ['', Validators.compose([Validators.required, ValidationService.mobileValidator])],
      password: ['', Validators.compose([Validators.required, ValidationService.passwordValidator])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    }, {
        validator: [ValidationService.MatchPassword]
      });


  }

  getUserDetail() {
    debugger;
    this.accountService.GetUserData()
      .subscribe(
        response => {
          console.log(response);
          if (response.isSuccess) {
            location.href = AppSetting.baseURL;
            //location.reload();
          }
          else {
            if (response.result <= 0) {
              if (response.result == -1)
                this.showPasswordReset = true;
              else
                this.ErrorMessages.push("Error occured during process of request.");
            }
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

  isFieldInvalid(field: string) {
    var a = this.form.get(field);
    if (a != null)
      return (
        (a.valid && a.touched) ||
        (a.untouched && this.formSubmitAttempt)
      );
    return true;
  }

  onSubmit() {
    //this.dh.success("success fully saved");

    console.log(this.showPasswordReset);
    this.showPasswordReset = false;
    if (this.form.valid) {
      //this.form.value.__RequestVerificationToken = this.anti;
      this.accountService.Register(this.form.value)
        .subscribe(
          response => {
            console.log(response);
            if (response.isSuccess) {
              location.href = AppSetting.baseURL;
              //location.reload();
            }
            else {
              if (response.result <= 0) {
                if (response.result == -1)
                  this.showPasswordReset = true;
                else
                  this.ErrorMessages.push("Error occured during process of request.");
              }
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
    this.formSubmitAttempt = true;
  }
}
