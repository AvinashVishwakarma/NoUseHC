import { Injectable, Inject } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class FileUploadService {

    NoData: any = null;
    constructor(private _http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    UploadFiles(serviceUrl: string, files: any): Observable<HttpEvent<any>> {
        debugger;
        const formData = new FormData();

        for (let file of files)
            formData.append(file.name, file);

        const uploadReq = new HttpRequest('POST', this.baseUrl + `Account/UploadFile2`, formData, {
            reportProgress: true,
        });

        return this._http.request(uploadReq);
    }

    Register(userData: any) {
        return this.doPostCall('Account/SignUp', userData);
    }

    private doPostCall(serviceUrl: string, data: any) {
        return this._http.post(this.baseUrl + serviceUrl, data, httpOptions)//, { observe: 'response' }
            .map((response: any) => response)
            .catch(this.errorHandler);
    }

    private doGetCall(serviceUrl: string) {
        return this._http.get(this.baseUrl + serviceUrl, httpOptions)
            .map((response: any) => response)
            .catch(this.errorHandler);
    }

    //Error handle function
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}