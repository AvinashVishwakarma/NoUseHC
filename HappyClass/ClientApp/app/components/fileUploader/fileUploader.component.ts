import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-uploader',
  templateUrl: './fileUploader.component.html'
})
export class FileUploader implements OnInit, OnChanges {
  @Input()
  config: FileUploadConfig;
  @Output()
  ApiResponse = new EventEmitter();

  private idDate: number = +new Date();
  private reg: RegExp = /(?:\.([^.]+))?$/;

  errorMessage: string;
  theme: string;
  id: number;
  hideProgressBar: boolean;
  maxSize: number;
  uploadAPI: string;
  formatsAllowed: string;
  multiple: boolean;
  headers: any;
  hideResetBtn: boolean;
  hideSelectBtn: boolean;
  attachPinText: string;
  uploadBtnText: string;

  selectedFiles: Array<any> = [];
  notAllowedList: Array<FileUploadError> = [];
  Caption: Array<string> = [];
  singleFile = true;
  progressBarShow = false;
  uploadBtn = false;
  uploadMsg = false;
  afterUpload = false;
  uploadClick = true;
  uploadMsgText: string;
  uploadMsgClass: string;
  percentComplete: number;


  private convertSize(fileSize: number) {
    return fileSize < 1024000
      ? (fileSize / 1024).toFixed(2) + " KB"
      : (fileSize / 1024000).toFixed(2) + " MB";
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["config"]) {
      //this.config = new FileUploadConfig();
      this.id = this.config.id || parseInt((this.idDate / 10000).toString().split(".")[1]) + Math.floor(Math.random() * 20) * 10000;

      //this.theme = this.config["theme"] || "";
      this.hideProgressBar = this.config.hideProgressBar || false;
      //this.hideResetBtn = this.config["hideResetBtn"] || false;
      this.hideSelectBtn = this.config.hideSelectBtn || false;
      this.uploadBtnText = this.config.uploadBtnText || "Upload";
      this.maxSize = this.config.maxSize || 20;
      this.uploadAPI = this.config.uploadAPI.url;
      this.formatsAllowed = this.config.formatsAllowed || ".jpg,.png,.pdf,.docx,.txt,.gif,.jpeg";
      this.multiple = this.config.multiple || false;
      this.headers = this.config.uploadAPI.headers || {};
    }
  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  allowedFormats() {
    return this.config.formatsAllowed;
  }

  public resetFileUpload() {
    this.selectedFiles = [];
    this.Caption = [];
    this.notAllowedList = [];
    this.uploadMsg = false;
    this.uploadBtn = false;
  }

  onChange(event: any) {
    this.resetFileUpload();
    //ITERATE SELECTED FILES
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
            errorMessage: "Maximum allowed size is " + this.maxSize + "MB."
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
          errorMessage: "Only " + this.formatsAllowed + " format are allowed."
        });
        continue;
      }
    }

    //let xhr = new XMLHttpRequest();
    //xhr.onreadystatechange = evnt => {
    //  this.ApiResponse.emit(evnt);
    //}
    //xhr.open("POST", this.uploadAPI, true);
    //for (const key of Object.keys(this.headers)) {
    //  // Object.keys will give an Array of keys
    //  xhr.setRequestHeader(key, this.headers[key]);
    //}
    //xhr.send(new FormData());
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

  showSelectedFile() {
    if (this.selectedFiles.length > 0)
      return true;
    else
      return false;
  }

  getSelectedFileDetail() {
    if (this.selectedFiles.length > 0)
      return this.selectedFiles[0].name;
  }

  showError() {
    if (this.notAllowedList.length > 0)
      return true;
    else
      return false;
  }

  getErrorMessage() {
    if (this.notAllowedList.length > 0)
      return this.notAllowedList[0].errorMessage;
  }

  getErrorMessages(fileError: FileUploadError) {
    return fileError.errorMessage;
  }

  uploadFiles() {
    let i: any;
    this.progressBarShow = true;
    this.uploadClick = false;
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
          this.uploadBtn = false;
          this.uploadMsg = true;
          this.afterUpload = true;
          this.uploadMsgText = "Upload Failed !";
          this.uploadMsgClass = "text-danger lead";
          //console.log(this.uploadMsgText);
          //console.log(evnt);
        }
        this.ApiResponse.emit(xhr);
      }
    };

    xhr.upload.onprogress = evnt => {
      this.uploadBtn = false; // button should be disabled by process uploading
      if (evnt.lengthComputable) {
        this.percentComplete = Math.round((evnt.loaded / evnt.total) * 100);
      }
      //console.log("Progress..."/*+this.percentComplete+" %"*/);
    };

    xhr.onload = evnt => {
      //console.log("onload");
      //console.log(evnt);
      this.progressBarShow = false;
      this.uploadBtn = false;
      this.uploadMsg = true;
      this.afterUpload = true;
      if (!isError) {
        this.uploadMsgText = "Successfully Uploaded !";
        this.uploadMsgClass = "text-success lead";
        //console.log(this.uploadMsgText + " " + this.selectedFiles.length + " file");
      }
    };

    xhr.onerror = evnt => {
      //console.log("onerror");
      //console.log(evnt);
    };

    xhr.open("POST", this.uploadAPI, true);
    for (const key of Object.keys(this.headers)) {
      // Object.keys will give an Array of keys
      xhr.setRequestHeader(key, this.headers[key]);
    }
    //let token = sessionStorage.getItem("token");
    //xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    //xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.send(formData);
  }
}

export class FileUploadConfig {
  //theme: string;
  id: number;
  hideProgressBar: boolean;
  maxSize: number;
  uploadAPI: UploadApi;
  formatsAllowed: string;
  multiple: boolean;
  headers: any;
  //hideResetBtn: boolean;
  hideSelectBtn: boolean;
  //attachPinText: string;
  uploadBtnText: string;
  //selectedFiles: Array<any> = [];
  //notAllowedList: Array<Object> = [];
  //Caption: Array<string> = [];
  //singleFile = true;
  ////progressBarShow = false;
  //uploadBtn: boolean = false;
  //uploadMsg: boolean = false;
  //afterUpload: boolean = false;
  //uploadClick: boolean = true;
  uploadMsgText: string;
  uploadMsgClass: string;
  percentComplete: number;

  //ngOnInit(): void {
  //  //this.theme = "";
  //  this.id = parseInt((this.idDate / 10000).toString().split(".")[1]) + Math.floor(Math.random() * 20) * 10000;
  //  this.hideProgressBar = false;
  //  //this.hideResetBtn = false;
  //  this.hideSelectBtn = false;
  //  this.uploadBtnText = "Upload";
  //  this.maxSize = 20;
  //  this.formatsAllowed = ".jpg,.png,.pdf,.docx,.txt,.gif,.jpeg";
  //  this.multiple = false;
  //}
}

export interface UploadApi {
  url: string;
  headers: any;
}

export interface FileUploadError {
  fileName: string;
  fileSize: string;
  errorMessage: string;
}
