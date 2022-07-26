import { Vehicule } from 'src/app/core/models/vehicule';

export class VehiculeVendu {
  public id: number = 0;
  public quantiteVendu: number = 0;
  public couleur: String = '';
  public vehiculeId!: number;
  public vehicule: Vehicule;
  constructor(vehicule: Vehicule) {
    this.vehicule = vehicule;
    this.vehiculeId = vehicule.id;
  }
}
export class VenteVehicule {
  public id: number = 0;
  public quantiteVendu: number = 0;
  public couleur: String = '';
  public vehiculeId!: number;
  public deviId!: number;
  constructor(vehicule: VehiculeVendu) {
    this.id = vehicule.id;
    this.quantiteVendu = vehicule.quantiteVendu;
    this.couleur = vehicule.couleur;
    this.vehiculeId = vehicule.vehiculeId;
  }
}
export enum VEHICULE_VENDU {
  ID = 'id',
  QUANTITE_VENDU = 'quantiteVendu',
  COULEUR = 'couleur',
  DEVIS_ID = 'deviId',
  VEHICULE_ID = 'vehiculeId',
  VEHICULE = 'vehiculeId',
}
