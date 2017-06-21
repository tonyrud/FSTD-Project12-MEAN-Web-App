import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../_services/app.config.service';
import { UsersService } from '../../../_services/users.service';
import { User } from '../../../_interfaces/user.interface';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private title: string
  private user: User

  constructor(
    private _config: AppConfigService,
    private _user: UsersService
  ) { }

  ngOnInit() {
    this.title = this._config.appName

    this._user.getUser().subscribe(user => {
      // set template user to return user parameter
      this.user = user
    });
  }

}
