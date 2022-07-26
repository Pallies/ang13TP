import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VehiculeVendu } from '../core/models/vehicule-vendu';
import { ApiService } from '../core/services/api.service';

@Injectable({
  providedIn: 'platform',
})
export class VehiculeVenteService {
  vehiculeVente: BehaviorSubject<VehiculeVendu[]> = new BehaviorSubject<VehiculeVendu[]>([]);

  init() {
    this.vehiculeVente.next([]);
  }

  add(vehiculeVendu: VehiculeVendu) {

    // si vide met la première donnée
    if (this.value.length == 0) this.vehiculeVente.next([vehiculeVendu]);
    // sinon si vehicule est présent avec la même couleur
    else if (this.estIdentique(vehiculeVendu))
      this.value
        // filtre par ref
        .filter((data) => data.vehicule.id == vehiculeVendu.vehicule.id)
        //suppression du stock pour tous les vehicules de même ref
        .map((data) => {
          data.vehicule.quantite = vehiculeVendu.vehicule.quantite;
          return data;
        })
        .filter((data) => data.couleur == vehiculeVendu.couleur)// filtre par couleur
        .forEach((data) => {
          data.quantiteVendu += vehiculeVendu.quantiteVendu;// ajout quantite vendu
        });
    // sinon on ajoute le vehicule
    else this.vehiculeVente.next([...this.value,vehiculeVendu]);
    // enregistrement de la nouvelle valeur

  }

  estIdentique(vehicule: VehiculeVendu) {
    return (
      this.value.filter(
        (data) => data.vehicule.id == vehicule.vehicule.id && data.couleur == vehicule.couleur
      ).length > 0
    );
  }
get value():VehiculeVendu[]{
  return this.vehiculeVente.getValue();
}

  get quantiteTotal(): number {
    if (this.value.length == 0) return 0;
    return this.value
      .map((data) => data.quantiteVendu)
      .reduce((c, sum) => (sum += c));
  }
  get prixTotalHT(): number {
    if (this.value.length == 0) return 0;
    return this.value
      .map((data) => data.quantiteVendu * data.vehicule.prixHT)
      .reduce((c, sum) => (sum += c));
  }
}
