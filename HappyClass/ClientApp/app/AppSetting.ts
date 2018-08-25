import { Injectable, Inject } from '@angular/core';


export class AppSetting {
  public static baseURL: string;
  constructor(baseUrl: string) {
    AppSetting.baseURL = baseUrl;
  }

}
