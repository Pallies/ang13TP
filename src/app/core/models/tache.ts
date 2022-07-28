import { Entretien } from 'src/app/core/models/entretien';
import { Client } from 'src/app/core/models/client';
import { Produit } from './produit';

export class Tache {
  public id: number = 0;
  public categorie!: string;
  public nom!: string;
  public prix!: number;
  public produits: Produit[] = [];
}
export class TacheAEffectuer {
  public id: number = 0;
  public categorie!: string;
  public nom!: string;
  public prix!: number;
  public entretienId!:Entretien;
  public produitId:number[] = [];
  public valide: boolean = false;
}
export enum TACHE {
  ID = 'id',
  CATEGORIE = 'categorie',
  NOM = 'nom',
  PRIX = 'prix',
  PRODUIT = 'produits',
}
