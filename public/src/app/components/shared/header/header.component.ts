import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../_services/users.service';
import { User } from '../../../_interfaces/user.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private title: string
  private user: User

  constructor(
    private _user: UsersService
  ) { }

  ngOnInit() {
    this.title = environment.app_config.appName

    // get signed in user, sets header variable to switch login/logout buttons
    this.user = this._user.getSignedUser()
    
    // watcher for sign in / signout
    this._user.getUser().subscribe(user => {
      // set template user to return user parameter
      this.user = user
    });
  }

}
