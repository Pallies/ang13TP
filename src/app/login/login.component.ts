import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Utilisateur } from '../core/models/utilisateur';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  utilisateurs!: Utilisateur[];

  constructor(
    public loginservice: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.utilisateurs = this.route.snapshot.data['dataUtilisateur'];
  }

  submit() {
    this.router.navigate(["devis","creation"]);
    if (this.loginservice.isValid()) {
      this.utilisateurs
        .filter((data) => data.email === this.loginservice.email)
        .map((data) => data.mdp === this.loginservice.password);
    }
  }
}
