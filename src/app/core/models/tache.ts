import { Produit } from './produit';

export class Tache {
  public id: number = 0;
  public categorie!: string;
  public nom!: string;
  public prix!: number;
  public produits: Produit[] = [];
}
export class TacheEffectuer {
  public id: number = 0;
  public categorie!: string;
  public nom!: string;
  public prix!: number;
  public entretienId!:number;
  public produitId:number[] = [];
  public valide: boolean = false;
  constructor(tache:Tache,entretienId:number){
    this.categorie=tache.categorie;
    this.nom=tache.nom;
    this.prix=tache.prix;
    this.entretienId=entretienId;
    this.produitId=tache.produits.filter(p=>p.quantite>0).flatMap((p) => p.id);
  }
}
export enum TACHE {
  ID = 'id',
  CATEGORIE = 'categorie',
  NOM = 'nom',
  PRIX = 'prix',
  PRODUIT = 'produits',
}
