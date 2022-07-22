import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicule } from '../core/models/vehicule';

@Injectable({
  providedIn: 'platform',
})
export class DevisVehiculeService {
  commande: BehaviorSubject<Vehicule[]> = new BehaviorSubject<Vehicule[]>([]);
  constructor() {}

  add(vehicule: Vehicule) {
    let temp: Vehicule[] = this.commande.getValue();
    if (temp.length == 0) this.commande.getValue().push(vehicule);
    else
      temp.forEach((data) => {
        if (data.id == vehicule.id && data.couleur == vehicule.couleur)
          data.quantiteVendu += vehicule.quantiteVendu;
        else this.commande.getValue().push(vehicule);
      });
    this.commande.next([...this.commande.getValue()]);
  }
}
