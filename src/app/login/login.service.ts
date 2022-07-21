import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {

    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }, {updateOn: 'submit'});
  }

  isValid() {
    return this.loginForm.valid;
  }

  get email() {
    return this.loginForm.get('email')?.value
  }

  get password() {
    return this.loginForm.get('password')?.value
  }

}
