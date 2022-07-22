import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/core/models/utilisateur';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css'],
})
export class UtilisateursComponent implements OnInit {
  utilisateurs!: Utilisateur[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.utilisateurs = this.route.snapshot.data['dataUtilisateurs'];
    console.log(this.utilisateurs);
  }

}
