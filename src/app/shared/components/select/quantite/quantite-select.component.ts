import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Composant utilisé pour selectionner la quantité de véhicules
 */
@Component({
  selector: 'car-quantite',
  template: `
    <div class="row">
      <select
        #select
        class="form-select col"
        [(ngModel)]="valeurSelection"
        (change)="emitionValeur()"
        (click)="initialiseMax()"
      >
        <option *ngFor="let index of compteur" [ngValue]="index">
          {{ index }}
        </option>
      </select>
      <p class="col" style="color:crimson;margin:auto">/ {{ max }}</p>
    </div>
  `,
})
export class QuantiteSelectComponent implements OnInit {
  /**quantité du stock */
  @Input() max: number = 0;
  @Input() raz!: Observable<boolean>;
  /** renvoie la quantite sélectionnée */
  @Output() selection: EventEmitter<number> = new EventEmitter<number>();

  compteur!: number[];
  valeurSelection: number = 0;
  constructor() {  }

  ngOnInit(): void {
    this.initialiseMax();
    this.raz.subscribe((d) => {
      this.valeurSelection = 0;
    });
  }
  initialiseMax() {
    this.compteur = [...Array(this.max)].map((_, i) => i + 1);
  }
  emitionValeur() {
    this.selection.emit(this.valeurSelection);
    this.initialiseMax();
  }
}
