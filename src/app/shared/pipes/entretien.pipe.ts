import { Produit } from 'src/app/core/models/produit';
import { Pipe, PipeTransform } from '@angular/core';
import { Tache } from 'src/app/core/models/tache';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'tachePipe',
})
export class EntretienPipe implements PipeTransform {
  constructor(private decimal: DecimalPipe) {}
  transform(
    value: Tache | Produit | Produit[],
    option?: any
  ): number | number[] | any {
    if (Array.isArray(value)) {
      let produits = value as Produit[];
      let prix;
      switch (option) {
        case 'prix':
          prix = produits
            .map((p) => p.prix * p.quantite)
            ?.reduce((b, c) => b + c);
          return this.decimal?.transform(prix, '1.2-2');
        case 'quantite':
          return produits.map((p) => p.quantite).reduce((b, c) => b + c);
        case 'presta':
          prix = produits
            .map((p) => 0.35 * p.prix * p.quantite)
            .reduce((b, c) => b + c);
          return this.decimal?.transform(prix, '1.2-2');
        default:
          return produits.filter((q) => q.quantite > 0).map((p) => p.id);
      }
    } else if (option != undefined) {
      let produit = value as Produit;
      return Math.round(produit.prix * produit.quantite*100)/100;
    } else {
      const tache = value as Tache;
      let prixHT = Math.round(tache.prix*100)/100;
      return prixHT += Math.round(tache.produits
        ?.map((p) => p.quantite * p.prix)
        .reduce((b, c) => b + c)*100)/100;
    }
  }
}
