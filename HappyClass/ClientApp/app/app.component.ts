import { Component, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ConfigService } from './Services/ConfigurationService';
import * as GlobalVariable from '../globalVarable';
import { AppSetting } from './AppSetting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cookie: CookieService, private router: Router, @Inject('APP_INITIALIZER') private anti: ConfigService
              , @Inject('BASE_URL') private baseUrl: string) {
    //debugger;
    //cookie.set("customCookie", 'Avinash');
    //let ud = appInit.load();
    //console.log(appInit.getConfig());

    //this is required to set the baseURL constant once
    let ob: AppSetting = new AppSetting(this.baseUrl);

    console.log(GlobalVariable.userActive);
    let authCookie = cookie.get('CookieAppAuthencticated');
    if (authCookie && authCookie.length > 0) {
      //alert('scucces');
      if (GlobalVariable.userActive)
        this.router.navigate(['/home']);
      else {
        cookie.delete('CookieAppAuthencticated');
        this.router.navigate(['']);
      }
    }
  }


}
