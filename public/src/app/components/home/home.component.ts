import { Component, OnInit } from '@angular/core';
import { User } from '../../_interfaces/user.interface';
import { UsersService } from '../../_services/users.service';
import { routerTransition } from '../../_animations/router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition() ],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  user: User

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    this.user = this._usersService.getSignedUser()
  }

}
