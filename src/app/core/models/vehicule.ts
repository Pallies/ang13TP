export class Vehicule {
  public id!:number;
  public photo!:string;
  public marque!:string;
  public modele!:string;
  public annee!:string;
  public quantite!:number;
  public prixHT!:number;
}
export enum VEHICULE{
  ID= 'id',
  PHOTO ='photo',
  MARQUE= 'marque',
  MODELE= 'modele',
  ANNEE= 'annee',
  QUANTITE= 'quantite',
  PRIX ='prixHT',
}
