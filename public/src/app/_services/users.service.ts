import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';
import { AppConfigService } from './app.config.service';
import { User } from '../_interfaces/user.interface';

@Injectable()
export class UsersService {

  constructor(
    private _reqService: RequestsService,
    private _config: AppConfigService
  ) { }

  registerUser (user: User ) {
    return this._reqService.apiPost(`register`, user)
  }
}
