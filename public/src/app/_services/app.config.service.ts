import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../../../config/client/app.config';

@Injectable()
export class AppConfigService {
  private applicationConfig = APP_CONFIG
  constructor() { }

  public get config () {
    return this.applicationConfig
  }
}
