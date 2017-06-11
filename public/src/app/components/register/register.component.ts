import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup


  constructor(
    private _fb: FormBuilder
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
    console.log(this.registerForm.valid)
  }

  cancelRegister(event) {
    console.log(event)
  }

}
