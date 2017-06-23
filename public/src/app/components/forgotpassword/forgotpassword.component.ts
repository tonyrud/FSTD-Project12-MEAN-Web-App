import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsersService } from '../../_services/users.service';

@Component({
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  private form: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _user: UsersService
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required]]
    })
  }

  forgotSubmit (form, event) {
    this._user.forgotPassword(this.form.value).subscribe(
      msg => {
        console.log(msg)
      },
      error => {
        console.log('error in reset', error)
      }
    )
  }

}
