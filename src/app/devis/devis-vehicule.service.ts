import { Vehicule } from 'src/app/core/models/vehicule';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class DevisVehiculeService {
  commande: BehaviorSubject<Vehicule[]> = new BehaviorSubject<Vehicule[]>([]);
  constructor() {
    this.init();
  }
  init() {
    this.commande.next([]);
  }
  add(vehicule: Vehicule) {
    // si vide met la première donnée
    if (this.value.length == 0) this.value.push(vehicule);
    // sinon si vehicule est présent avec la même couleur
    else if (this.estIdentique(vehicule))
      this.value
        // filtre par ref
        .filter((data) => data.id == vehicule.id)
        //suppression du stock pour tous les vehicules de même ref
        .map((data) => {
          data.quantite = vehicule.quantite;
          return data;
        })
        // filtre par couleur
        .filter((data) => data.couleur == vehicule.couleur)
        // ajout quantite vendu
        .forEach((data) => {
          data.quantiteVendu += vehicule.quantiteVendu;
        });
        // sinon on ajoute le vehicule
    else this.value.push(vehicule);
    // enregistrement de la nouvelle valeur
    this.commande.next([...this.value]);
  }
  estIdentique(vehicule: Vehicule) {
    return (
      this.commande
        .getValue()
        .filter(
          (data) => data.id == vehicule.id && data.couleur == vehicule.couleur
        ).length > 0
    );
  }

  get value(): Vehicule[] {
    return this.commande.getValue();
  }
}
