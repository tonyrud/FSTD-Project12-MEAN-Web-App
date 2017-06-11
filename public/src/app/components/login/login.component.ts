import { Component, OnInit } from '@angular/core';

interface UserLogin {
  email: string
  password: string
}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private form: UserLogin = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  loginSubmit (form, event) {
    console.log(event, this.form)
  }

  forgotPassword (event) {
    console.log(event)
  }
}
