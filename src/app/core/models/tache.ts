import { Produit } from './produit';

/**
 * La classe Tache va servir à pour la gestion des entretiens/tâches,
 * pour la liste des tâches proposées
 */
export class Tache {
  public id: number = 0;
  public categorie!: string;
  public nom!: string;
  public prix!: number;
  public produits: Produit[] = [];
}

/**
 * La classe TacheEffectuer va servir à pour la gestion des entretiens/tâches,
 * ce sont les tâches que l'employé va réaliser pour un client
 */
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

/**
 * L'énumération Tache sert à synthétiser les termes à un seul endroit
 */
export enum TACHE {
  ID = 'id',
  CATEGORIE = 'categorie',
  NOM = 'nom',
  PRIX = 'prix',
  PRODUIT = 'produits',
}
