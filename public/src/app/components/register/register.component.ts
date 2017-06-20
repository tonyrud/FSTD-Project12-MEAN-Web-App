import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsersService } from '../../_services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup
  private returnUrl: string;

  constructor(
    private _fb: FormBuilder,
    private _users: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

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
        this.router.navigate([this.returnUrl])
      },
      error => {
        console.log('error registering user:', error)
      }
    )
  }

  cancelRegister(event) {
    this.router.navigate(['login'])
  }

}
