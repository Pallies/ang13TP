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
  public priorite:string='';
  public terminer:boolean=false;
  setTache(tacheEffectuer:TacheEffectuer){
    this.id=tacheEffectuer.id
    this.categorie=tacheEffectuer.categorie
    this.nom=tacheEffectuer.nom
    this.prix=tacheEffectuer.prix
    this.priorite=tacheEffectuer.priorite
    this.terminer=tacheEffectuer.terminer
  }
  setProduits(produits:Produit[]){
    this.produits=produits;
  }
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
  public entretienId!: number;
  public priorite:string='';
  public terminer:boolean=false;
  public produitId: number[] = [];
  constructor(tache: Tache, entretienId: number) {
    this.categorie = tache.categorie;
    this.nom = tache.nom;
    this.prix = tache.prix;
    this.entretienId = entretienId;
    this.produitId = tache.produits
      .filter((p) => p.quantite > 0)
      .flatMap((p) => p.id);
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
  TERMINE = 'termine'
}
