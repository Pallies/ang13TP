import { Client } from "./client";
import { VenteVehicule } from "./vehicule-vendu";

export class Devis {
  public id: number=0;
  public dateCreation!: string;
  public quantiteTotal: number = 0;
  public prixHT!: number;
  public client!: Client;
  public venteVehicules!: VenteVehicule;
  public clientId!: number;
  public venteVehiculeId!: number;
}

export enum DEVIS {
  ID = 'id',
  DATE = 'dateCreation',
  QUANTITE = 'quantiteTotal',
  PRIX = 'prixHT',
  CLIENT = 'client',
  VENTE_VEHICULE = 'venteVehicule',
  CLIENT_ID = 'clientId',
  VENTE_VEHICULE_ID = 'venteVehiculeId',
}

