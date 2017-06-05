import { Injectable } from '@angular/core';
import { APP_CONFIG } from './../../../app.config';

@Injectable()
export class AppConfigService {
  private applicationConfig = APP_CONFIG
  constructor() { }

  public get config () {
    return this.applicationConfig
  }
}
