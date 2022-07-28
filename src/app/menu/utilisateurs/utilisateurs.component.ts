import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/core/models/utilisateur';
import { utilisateurHeader, UtilisateurHeader } from './utilisateur-form.model';
import { UtilisateurFormsService } from './utilisateur-forms.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css'],
})
export class UtilisateursComponent implements OnInit {
  ref!: string;
  utilisateurs!: Utilisateur[];
  modalHeader: UtilisateurHeader[] = utilisateurHeader;
  constructor(
    private route: ActivatedRoute,
    private utilisateurFormService: UtilisateurFormsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.utilisateurs = this.route.snapshot.data['dataUtilisateurs'];
  }

  async refresh() {
    this.utilisateurFormService.refresh();
    this.router.navigated = false;
    await this.router.navigate(['menu', 'utilisateurs']);
    this.utilisateurs = this.route.snapshot.data['dataUtilisateurs'];
  }

  utilisateurChoisi(utilisateur: Utilisateur) {
    this.utilisateurFormService.initValue(utilisateur);
  }
}
