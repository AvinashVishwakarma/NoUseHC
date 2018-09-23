import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/Account/login/login.component';
//import { materialize } from 'rxjs/operator/materialize';
import { MaterialModule } from './material.module';
import { ControlMessagesComponent } from './CommonComponent/Validation/control-messageComponent';
import { FullLayoutComponent } from './CommonComponent/AppContainer/FullLayout/full-layout.component';
import { SimpleLayoutComponent } from './CommonComponent/AppContainer/SimpleLayout/simple-layout.component';
import { AppRoutingModule } from './CommonComponent/AppContainer/app.routing';
//import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
//import { SlimScroll } from 'angular-io-slimscroll';
import { SlimScroll } from './Directives/slimscroll.directive';
import { MediaMatcher } from '@angular/cdk/layout';
import { RegisterComponent } from './components/Account/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './Services/AppHttpInterceptor';
import { NumbersOnlyDirective } from './Directives/Common/NumberOnlyDirective';
import { AccountServicce } from './Services/AccountService';
import { CookieService } from 'ngx-cookie-service';
import { DialogHelper, NotifyDialog, ProgressDialog } from './CommonComponent/Widget/CommonHelper';
//import { MatFileUploadModule } from 'angular-material-fileupload';
import { FileUploadService } from './Services/FileUploadService';
import { AlphabetsOnlyDirective } from './Directives/Common/AlphabetOnlyDirective';
import { ResetPasswordComponent } from './components/Account/resetPassword/resetPassword.component';
import { FileUploader } from './components/fileUploader/fileUploader.component';

const AppContainers = [FullLayoutComponent, SimpleLayoutComponent];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ControlMessagesComponent,
    AppContainers,
    NumbersOnlyDirective,
    AlphabetsOnlyDirective,
    NotifyDialog,
    ProgressDialog,
    SlimScroll,
    FileUploader
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    //NgSlimScrollModule,
    //MatFileUploadModule,
  ],
  entryComponents: [
    NotifyDialog,
    ProgressDialog
  ],
  providers: [
    CookieService,
    MediaMatcher,
    //{
    //    provide: SLIMSCROLL_DEFAULTS,
    //    useValue: {
    //        alwaysVisible: false
    //    }
    //},
    AppHttpInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
    AccountServicce,
    FileUploadService,
    DialogHelper
  ],
})
export class AppModuleShared {
}
