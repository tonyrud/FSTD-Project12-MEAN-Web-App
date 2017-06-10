import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { APP_CONFIG } from '../../app.config';

@Injectable()
export class AppConfigService {
  private appEnvironment = environment
  private applicationName = APP_CONFIG.appName
  constructor() { }

  public get environment () {
    return this.appEnvironment
  }
  
  public get appName () {
    return this.applicationName
  }

  public get apiUrl () {
    return this.appEnvironment.apiUrl
  }
}
