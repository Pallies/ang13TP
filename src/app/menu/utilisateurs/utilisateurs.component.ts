import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/core/models/utilisateur';
import { utilisateurHeader, UtilisateurHeader } from './utilisateur-form.model';
import { UtilisateurFormsService } from './utilisateur-forms.service';

/**
 * Composant qui sert à l'affichage des utilisateurs
 */
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


  /**
   * Fonction qui charge la liste des utilisateurs à l'initialisation de la page
   */
  ngOnInit(): void {
    this.utilisateurs = this.route.snapshot.data['dataUtilisateurs'];
  }

  /**
   * Fonction qui sert à recharger la page en asynchrone
   */
  async refresh() {
    this.utilisateurFormService.refresh();
    this.router.navigated = false;
    await this.router.navigate(['menu', 'utilisateurs']);
    this.utilisateurs = this.route.snapshot.data['dataUtilisateurs'];
  }

  /**
   * Fonction qui permet de sélectionner un utilisateur
   * @param utilisateur
   */
  utilisateurChoisi(utilisateur: Utilisateur) {
    this.utilisateurFormService.initValue(utilisateur);
  }
}
