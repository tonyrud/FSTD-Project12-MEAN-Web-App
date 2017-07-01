import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';
import { UsersService } from '../../_services/users.service';

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
    private router: Router,
    private _user: UsersService
  ) { }

  ngOnInit() {
    // reset login status
    this._auth.logout();
    // send empty user to reset header observable
    this._user.sendUser();
    this.loginForm = this._formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  loginSubmit(form, event) {
    this._auth.login(this.loginForm.value).subscribe(
      () => {
        this._user.sendUser()
        this.router.navigate(['search-locations'])
      },
      error => {
        console.error('err login in:', error)
      }
    )
  }

  forgotPassword(event) {
    this.router.navigate(['forgot-password'])
  }
}
