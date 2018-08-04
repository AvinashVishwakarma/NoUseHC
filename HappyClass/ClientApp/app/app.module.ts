import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/Account/login/login.component';
import { ConfigService, configurationServiceInitializerFactory } from './Services/ConfigurationService';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppModuleShared,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    {
      provide: 'APP_INITIALIZER',
      useFactory: configurationServiceInitializerFactory, deps: [ConfigService], multi: true
    },
    {
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
    },
    {
      provide: 'AntiForgeryToken',
      useFactory: getAntiForgeryToken,
    }
  ]
})
export class AppModule {
}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function getAntiForgeryToken() {
  return (<HTMLInputElement>document.getElementsByName('__RequestVerificationToken')[0]).value;
}
