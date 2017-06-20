import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';

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
    private _formBuilder: FormBuilder,
    private _auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    // reset login status
    this._auth.logout();

    this.loginForm = this._formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  loginSubmit (form, event) {
    // console.log(this.loginForm.value)
    this._auth.login(this.loginForm.value).subscribe(
      () => this.router.navigate(['/']),
      error => {
        console.error('err login in:', error)
      }
    )
  }

  forgotPassword (event) {
    console.log(event)
  }
}
