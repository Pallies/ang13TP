import { Entretien } from 'src/app/core/models/entretien';
import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvaPipe',
})
export class TvaPipe implements PipeTransform {
  constructor(private decimal: DecimalPipe) {}
  transform(value: Entretien | undefined, tva?: number): number {
    if (value == undefined) return 0;
    let valueTva = tva ? tva : 0.2;
    let prix = value.taches
      .flatMap((t) => t.produits)
      .map((p) => p.quantite * p.prix)
      .reduce((a, b) => b + a);
    return (this.decimal?.transform(prix + prix * valueTva, '1.2')||0) as number;
  }
}
