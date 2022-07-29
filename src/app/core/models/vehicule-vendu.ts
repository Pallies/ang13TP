import { Vehicule } from 'src/app/core/models/vehicule';

/**
 * La classe VehiculeVendu va servir à pour la gestion des ventes de véhicules,
 * ce sont les véhicules choisis par un client sur un devis
 */
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
  setCaracteristique(vehiculeVendu:VenteVehicule){
    this.id=vehiculeVendu.id;
    this.quantiteVendu=vehiculeVendu.quantiteVendu;
    this.couleur=vehiculeVendu.couleur;
    return this;
  }
}

/**
 * La classe VenteVehicule va servir à pour la gestion des ventes de véhicules,
 * ce sont les véhicules choisis par un client sur un devis,
 * transformé pour l'enregistrement dans json-server
 */
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

/**
 * L'énumération Vehicule_Vendu sert à synthétiser les termes à un seul endroit
 */
export enum VEHICULE_VENDU {
  ID = 'id',
  QUANTITE_VENDU = 'quantiteVendu',
  COULEUR = 'couleur',
  DEVIS_ID = 'deviId',
  VEHICULE_ID = 'vehiculeId',
  VEHICULE = 'vehiculeId',
}
