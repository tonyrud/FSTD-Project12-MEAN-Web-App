import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

interface UserLogin {
  email: string
  password: string
}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  loginSubmit (form, event) {
    console.log(this.loginForm.value)
  }

  forgotPassword (event) {
    console.log(event)
  }
}
