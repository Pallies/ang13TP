import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Utilisateur } from '../core/models/utilisateur';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

/**
 * Composant sert à l'authentification
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  utilisateurs!: Utilisateur[];

  constructor(
    public loginservice: LoginService,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {}

  /**
   * Fonction qui permet la soumission du formulaire de connexion
   */
  submitForm() {
    if (this.loginservice.isValid()) {
      this.authService
        .connexion(this.loginservice.loginForm.value)
        .then((res) => {
          if (res) this.router.navigate(['menu']);
          else this.loginservice.loginForm.reset();
        });
    }
  }
}
