import { Component, OnInit } from '@angular/core';
import { User } from '../../_interfaces/user.interface';
import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: User

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    this.user = this._usersService.getSignedUser()
  }

}
