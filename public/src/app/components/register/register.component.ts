import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup


  constructor(
    private _fb: FormBuilder,
    private _users: UsersService
  ) { }

  ngOnInit() {
    this.registerForm = this._fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    })
  }

  registerSubmit(event) {
    this._users.registerUser(this.registerForm.value).subscribe(
      res => {
        debugger
      },
      error => {
        console.log('error registering user:', error)
      }
    )
  }

  cancelRegister(event) {
    console.log(event)
  }

}
