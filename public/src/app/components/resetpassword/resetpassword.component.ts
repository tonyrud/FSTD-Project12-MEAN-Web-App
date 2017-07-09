import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsersService } from '../../_services/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  form: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _user: UsersService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }

  resetPassSubmit(form, event) {
    const token: string = this._route.snapshot.params['token']
    this._user.resetPassword(this.form.value, token).subscribe(
      msg => {
        console.log(msg)
      },
      error => {
        console.log('error in reset', error)
      }
    )
  }

}
