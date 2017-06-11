import { Component } from '@angular/core';
import { RequestsService } from './_services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title: string = 'Sup! If you see a list of users, the api works';
  private users: any
  constructor(
    private api:RequestsService
  ) {this.init()}
  
  init () {
    // this.api.apiGet('users').subscribe(
    //   users => {
    //     this.users = users.users
    //   }
    // )
  }
}
