import { Injectable, Inject } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { CoreService } from "./core.service";
import { AppSetting } from "../AppSetting";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class FileUploadService extends CoreService {

    NoData: any = null;
    //constructor(private _http2: HttpClient, @Inject('BASE_URL') private baseUrl2: string) {
    //  //super(_http, baseUrl);
    //}

    UploadFiles(serviceUrl: string, files: any): Observable<HttpEvent<any>> {
        debugger;
        const formData = new FormData();

        for (let file of files)
            formData.append(file.name, file);

      const uploadReq = new HttpRequest('POST', AppSetting.baseURL + `Account/UploadFile2`, formData, {
            reportProgress: true,
        });

        return this._http.request(uploadReq);
    }

    Register(userData: any) {
        return this.doPostCall('Account/SignUp', userData);
    }
}
