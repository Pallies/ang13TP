import { Couleur } from './../../../core/models/enums/couleur';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'car-couleur',
  template: `
    <select
      #select
      class="form-select"
      [(ngModel)]="valeurSelection"
      (click)="emitionValeur()"
      [ngStyle]="{ backgroundColor: valeurSelection }"
    >
      <option selected></option>
      <option
        *ngFor="let item of couleur; let i = index"
        [ngStyle]="{ backgroundColor: item }"
        [ngValue]="item"
      ></option>
    </select>
  `,
})
export class CouleurComponent implements OnInit {
  /** renvoie la couleur sélectionnée */
  @Output() selection: EventEmitter<string> = new EventEmitter<string>();
  // récupération des valeurs de l'enum Couleur
  couleur!: Couleur[];
  // valeur de sélection
  valeurSelection!: string;

  constructor() {}

  ngOnInit(): void {
    this.couleur = Object.values(Couleur);
    this.valeurSelection = this.couleur[0];
    this.emitionValeur();
  }
  /** recherche de la cle et envoie du resultat */
  emitionValeur() {
    Object.entries(Couleur)
      .filter((enu) => enu[1] == this.valeurSelection)
      .map((res) => res[0])
      .forEach((res, i) => {
        if (i == 0) this.selection.emit(res);
      });
  }
}
