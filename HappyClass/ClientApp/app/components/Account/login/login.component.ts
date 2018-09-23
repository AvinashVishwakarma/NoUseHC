import { Component, OnInit, Inject, Injectable, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../CommonComponent/Validation/validation.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AccountServicce } from '../../../Services/AccountService';
import { HttpRequest, HttpHandler, HttpClient, HttpInterceptor, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppSetting } from '../../../AppSetting';
import { FileUploadConfig } from '../../fileUploader/fileUploader.component';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  fileUploadConfig: FileUploadConfig;
  percentComplete: number;
  ApiResponse = new EventEmitter();
  singleFile: boolean;
  Caption: Array<string> = [];
  progressBarShow = false;
  selectedFiles: Array<any> = [];
  notAllowedList: Array<Object> = [];
  formatsAllowed: string;
  maxSize: number;
  form: FormGroup;                    // {1}
  reg: RegExp = /(?:\.([^.]+))?$/;
  private formSubmitAttempt: boolean; // {2}
  public ErrorMessages: any;
  constructor(public router: Router,
    private fb: FormBuilder, public http: HttpClient
    , @Inject('AntiForgeryToken') public anti: string, private accountService: AccountServicce) {
    //this.http = Http;
    this.fileUploadConfig = new FileUploadConfig();
    this.fileUploadConfig.maxSize = 1;
    this.fileUploadConfig.uploadAPI = {
      url: "http://localhost:64632/account/fileUpload",
      headers: {
        //"content-Type": "multipart/form-data",
        //"Authorization": `Bearer`
      }
    };
  }

  convertSize(fileSize: number) {
    //console.log(fileSize + " - "+ str);
    return fileSize < 1024000
      ? (fileSize / 1024).toFixed(2) + " KB"
      : (fileSize / 1024000).toFixed(2) + " MB";
  }

  DocUpload(env) {
    //debugger;
    console.log(env);
  }

  onChange(event: any) {
    //ITERATE SELECTED FILES
    this.maxSize = 20;
    this.formatsAllowed = ".jpg,.png,.pdf,.docx,.txt,.gif,.jpeg";
    debugger;
    let formatsCount: any;
    formatsCount = this.formatsAllowed.match(new RegExp("\\.", "g"));
    formatsCount = formatsCount.length;
    let file: FileList;
    if (event.type == "drop") {
      file = event.dataTransfer.files;
      //console.log("type: drop");
    } else {
      file = event.target.files || event.srcElement.files;
      //console.log("type: change");
    }


    let currentFileExt: any;
    let ext: any;
    let frmtAllowed: boolean;
    for (let i = 0; i < file.length; i++) {
      //CHECK FORMAT
      //CURRENT FILE EXTENSION
      currentFileExt = this.reg.exec(file[i].name);
      currentFileExt = currentFileExt[1];
      //console.log(file[i].name);
      frmtAllowed = false;
      //FORMAT ALLOWED LIST ITERATE
      for (let j = formatsCount; j > 0; j--) {
        ext = this.formatsAllowed.split(".")[j];
        //console.log("FORMAT LIST ("+j+")= "+ext.split(",")[0]);
        if (j == formatsCount) {
          ext = this.formatsAllowed.split(".")[j] + ",";
        } //check format
        if (currentFileExt.toLowerCase() == ext.split(",")[0]) {
          frmtAllowed = true;
        }
      }

      if (frmtAllowed) {
        //console.log("FORMAT ALLOWED");
        //CHECK SIZE
        if (file[i].size > this.maxSize * 1024000) {
          //console.log("SIZE NOT ALLOWED ("+file[i].size+")");
          this.notAllowedList.push({
            fileName: file[i].name,
            fileSize: this.convertSize(file[i].size),
            errorMsg: "Invalid size"
          });
          continue;
        } else {
          //format allowed and size allowed then add file to selectedFile array
          this.selectedFiles.push(file[i]);
        }
      } else {
        //console.log("FORMAT NOT ALLOWED");
        this.notAllowedList.push({
          fileName: file[i].name,
          fileSize: this.convertSize(file[i].size),
          errorMsg: "Invalid format"
        });
        continue;
      }
    }
  }

  uploadFiles() {
    //console.log(this.selectedFiles);

    let i: any;
    this.progressBarShow = true;
    //this.uploadClick = false;
    this.notAllowedList = [];
    let isError = false;

    let xhr = new XMLHttpRequest();
    let formData = new FormData();

    for (i = 0; i < this.selectedFiles.length; i++) {
      if (this.Caption[i] == undefined) this.Caption[i] = "files";
      //Add DATA TO BE SENT
      formData.append(
        this.Caption[i],
        this.selectedFiles[i] /*, this.selectedFiles[i].name*/
      );
      //console.log(this.selectedFiles[i]+"{"+this.Caption[i]+" (Caption)}");
    }

    if (i > 1) {
      this.singleFile = false;
    } else {
      this.singleFile = true;
    }

    xhr.onreadystatechange = evnt => {
      //console.log("onready");
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          isError = true;
          this.progressBarShow = false;
          //this.uploadBtn = false;
          //this.uploadMsg = true;
          //this.afterUpload = true;
          //this.uploadMsgText = "Upload Failed !";
          //this.uploadMsgClass = "text-danger lead";
          //console.log(this.uploadMsgText);
          //console.log(evnt);
        }
        this.ApiResponse.emit(xhr);
      }
    };

    xhr.upload.onprogress = evnt => {
      //this.uploadBtn = false; // button should be disabled by process uploading
      if (evnt.lengthComputable) {
        this.percentComplete = Math.round((evnt.loaded / evnt.total) * 100);
      }
      //console.log("Progress..."/*+this.percentComplete+" %"*/);
    };

    xhr.onload = evnt => {
      //console.log("onload");
      //console.log(evnt);
      this.progressBarShow = false;
      //this.uploadBtn = false;
      //this.uploadMsg = true;
      //this.afterUpload = true;
      if (!isError) {
        //this.uploadMsgText = "Successfully Uploaded !";
        //this.uploadMsgClass = "text-success lead";
        //console.log(this.uploadMsgText + " " + this.selectedFiles.length + " file");
      }
    };

    xhr.onerror = evnt => {
      //console.log("onerror");
      //console.log(evnt);
    };
    let uploadAPI: {
      url: "http://localhost:64632/api/files.upload",
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    xhr.open("POST", uploadAPI.url, true);
    for (const key of Object.keys(uploadAPI.headers)) {
      // Object.keys will give an Array of keys
      xhr.setRequestHeader(key, uploadAPI.headers[key]);
    }
    //let token = sessionStorage.getItem("token");
    //xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    //xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.send(formData);
  }

  removeFile(i: any, sf_na: any) {
    //console.log("remove file clicked " + i)
    if (sf_na == "sf") {
      this.selectedFiles.splice(i, 1);
      this.Caption.splice(i, 1);
    } else {
      this.notAllowedList.splice(i, 1);
    }

    if (this.selectedFiles.length == 0) {
      //this.uploadBtn = false;
    }
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


