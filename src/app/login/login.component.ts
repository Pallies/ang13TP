import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ApiService } from '../core/services/api.service';
import { Utilisateur } from '../core/models/utilisateur';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public loginservice: LoginService, private route: ActivatedRoute, private apiservice: ApiService <Utilisateur>) {}

  ngOnInit(): void {
    //this.route.snapshot.data['dataUtilisateur']
  }

  submit() {
    console.log(this.loginservice.isValid(), this.loginservice.email, this.loginservice.password)
  }

  login() {
    //this.apiservice.
  }
}
