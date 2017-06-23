import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { RequestsService } from './requests.service';
import { AppConfigService } from './app.config.service';
import { User } from '../_interfaces/user.interface';

@Injectable()
export class UsersService {

  private subject = new Subject<any>();

  constructor(
    private _reqService: RequestsService,
    private _config: AppConfigService
  ) { }

  registerUser(user: User) {
    return this._reqService.apiPost(`register`, user)
  }

  forgotPassword(email: string) {
    return this._reqService.apiPost(`forgot`, email)
  }

  resetPassword(password: string, token: string) {
    return this._reqService.apiPost(`resetPassword`, {password, token})
  }

  // get the currently signed in user from local storage
  public getSignedUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'))
  }

  // recieve obs from other components to update user subject
  sendUser() {
    this.subject.next(this.getSignedUser());
  }

  // get user subject in any component
  getUser(): Observable<any> {
    return this.subject.asObservable();
  }


}
