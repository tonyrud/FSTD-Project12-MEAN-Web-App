import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class AppConfigService {
  private applicationConfig = environment
  constructor() { }

  public get config () {
    return this.applicationConfig
  }

  public get apiUrl () {
    return this.applicationConfig.apiUrl
  }
}
