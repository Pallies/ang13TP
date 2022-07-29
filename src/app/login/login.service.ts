import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Service qui sert à l'authentification
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {

    this.loginForm = this.formbuilder.group({
      email: ['admin@car.fr', [Validators.required, Validators.email]],
      mdp: ['rootroot', [Validators.required, Validators.minLength(8)]],
    }, {updateOn: 'submit'});
  }

  isValid() {
    return this.loginForm.valid;
  }

  get email() {
    return this.loginForm.get('email')?.value
  }

  get password() {
    return this.loginForm.get('mdp')?.value
  }

}
