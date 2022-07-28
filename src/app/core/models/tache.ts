import { Produit } from './produit';

export class Tache {
  public id: number = 0;
  public categorie!: string;
  public nom!: string;
  public prix!: number;
  public produits: Produit[] = [];
  
}
export enum TACHE {
  ID = 'id',
  CATEGORIE = 'categorie',
  NOM = 'nom',
  PRIX = 'prix',
  PRODUIT = 'produits',
}
