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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends CoreComponent implements OnInit  {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  public ErrorMessages: any;
  public showPasswordReset: boolean;

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

    //const formData = new FormData();

    //for (let file of files)
    //    formData.append(file.name, file);

    //const uploadReq = new HttpRequest('POST', `http://localhost:52112/Account/UploadFile2`, formData, {
    //    reportProgress: true,
    //});

    //this.http.request(uploadReq).subscribe(event => {
    //    if (event.type === HttpEventType.UploadProgress)
    //        this.progress = Math.round(100 * event.loaded / (event.total ? event.total : 1));
    //    else if (event.type === HttpEventType.Response)
    //        this.message = (event.body ? event.body : 'No message found ').toString();
    //});

    this.fileUploadService.UploadFiles('Account/UploadFile2', files).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / (event.total ? event.total : 1));
      else if (event.type === HttpEventType.Response)
        this.message = (event.body ? event.body : 'No message found ').toString();
    });
  }

  ngOnInit() {
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

  isFieldInvalid(field: string) {
    var a = this.form.get(field);
    if (a != null)
      return (
        (a.valid && a.touched) ||
        (a.untouched && this.formSubmitAttempt)
      );
    return true;
  }

  onSubmit2(data: number) {
    if (data == 1)
      this.dh.success("process saved successfully");
    else if (data == 2)
      this.dh.error("Error occurred during process of your request");
    else if (data == 3)
      this.dh.warn("success fully saved");
    else if (data == 5)
      this.dh.inform("success fully saved");
    else if (data == 4)
      this.dh.confirm("do u relally want to success fully saved");
    else if (data == 6) {
      //let progressDialog2 = this.dh.showProgressMessage("hello ahsjkdhaskjd hasjkhdas jds ahdjkh kh kh kjhjh kjh k, alsdalshd klad dhakdajdklasd jasldkas jdaskldjas lasjd salkdjsa kdlsaj aslkj aslkdas dlkasd sakldjas dlkas jdad somehing is going on!");
      //setTimeout(() => {
      //    this.dh.closeDialog(progressDialog2);
      //}, 500);
      let progressDialog = this.dh.showProgress();
      setTimeout(() => {
        this.dh.closeDialog(progressDialog);
      }, 3000);
    }
    else if (data == 7) {
      let progressDialog = this.dh.showProgressMessage("hello ahsjkdhaskjd hasjkhdas jds ahdjkh kh kh kjhjh kjh k, alsdalshd klad dhakdajdklasd jasldkas jdaskldjas lasjd salkdjsa kdlsaj aslkj aslkdas dlkasd sakldjas dlkas jdad somehing is going on!");
      setTimeout(() => {
        this.dh.closeDialog(progressDialog);
      }, 10000);
    }
    else if (data == 8) {
      let snackbar = this.dh.openSnackBar("askdljasd", "undo");
      this.dh.onSnackBarAction(snackbar, () => {
        let progressDialog = this.dh.showProgressMessage("You took action Undo");
        setTimeout(() => {
          progressDialog.close();
          //this.dh.closeDialog(progressDialog);
        }, 5000);
      });
      //snackbar.onAction().subscribe(() => {
      //    let progressDialog = this.dh.showProgressMessage("You took action Undo");
      //    setTimeout(() => {
      //        progressDialog.close();
      //        //this.dh.closeDialog(progressDialog);
      //    }, 5000);
      //});

      //setTimeout(() => {
      //    this.dh.closeDialog(progressDialog);
      //}, 10000);
    }
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
