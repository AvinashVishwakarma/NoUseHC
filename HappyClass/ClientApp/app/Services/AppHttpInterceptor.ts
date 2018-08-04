import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private cookie: CookieService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //debugger;
        request = request.clone({
            setHeaders: {
                //"X-XSRF-TOKEN": request.body.__RequestVerificationToken,
                //"Content-Type": "application/json",
                "X-XSRF-TOKEN": this.cookie.get("XSRF-TOKEN")
            }
            //setHeaders: {
            //    Authorization: `Bearer aadasds`
            //}
        });
        //request.body = JSON.stringify(request.body);

        //let a: any;
        //response = response.clone({
        //    headers
        //});
        return next.handle(request);
    }

}