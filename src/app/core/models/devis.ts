import { Client } from "./client";
import { VenteVehicule } from "./vehicule-vendu";

/**
 * La classe Devis va servir à la gestion des ventes de véhicules,
 * les devis sont établis pour les clients
 * et contiennent les véhicules demandés
 */
export class Devis {
  public id: number=0;
  public dateCreation!: string;
  public quantiteTotal: number = 0;
  public prixHT!: number;
  public client!: Client;
  public venteVehicules!: VenteVehicule;
  public clientId!: number;
  public venteVehiculeId!: number;
  public statut!: boolean;
}

/**
 * La classe DevisValidation va servir pour l'update d'un devis (validation de celui-ci)
 */
export class DevisValidation {
  public id: number=0;
  public dateCreation!: string;
  public quantiteTotal: number = 0;
  public prixHT!: number;
  public clientId!: number;
  public statut!: boolean;

  constructor(devis: Devis){
    this.id = devis.id;
    this.dateCreation = devis.dateCreation;
    this.quantiteTotal = devis.quantiteTotal;
    this.prixHT = devis.prixHT;
    this.clientId = devis.clientId;
    this.statut = devis.statut;
  }
}

/**
 * L'énumération Devis sert à synthétiser les termes à un seul endroit
 */
export enum DEVIS {
  ID = 'id',
  DATE = 'dateCreation',
  QUANTITE = 'quantiteTotal',
  PRIX = 'prixHT',
  CLIENT = 'client',
  VENTE_VEHICULE = 'venteVehicule',
  CLIENT_ID = 'clientId',
  VENTE_VEHICULE_ID = 'venteVehiculeId',
  STATUT = 'statut'
}

