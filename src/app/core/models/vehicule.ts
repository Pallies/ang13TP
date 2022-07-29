/**
 * La classe VehiculeVendu va servir à pour la gestion des ventes de véhicules,
 * pour la liste des véhicules en vente
 */
export class Vehicule {
  public id!:number;
  public photo!:string;
  public marque!:string;
  public modele!:string;
  public annee!:string;
  public quantite!:number;
  public prixHT!:number;
}


/**
 * L'énumération Vehicule sert à synthétiser les termes à un seul endroit
 */
export enum VEHICULE{
  ID= 'id',
  PHOTO ='photo',
  MARQUE= 'marque',
  MODELE= 'modele',
  ANNEE= 'annee',
  QUANTITE= 'quantite',
  PRIX ='prixHT',
}
