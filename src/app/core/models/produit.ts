/**
 * La classe Produit va servir à pour la gestion des entretiens/tâches,
 * ce sont les produits nécessaires à leur réalisation
 */
export class Produit {
  public id:number=0;
  public nom!:string;
  public prix!:number;
  public quantite!:number;
  public dateCommande!:string;
}

/**
 * L'énumération Produit sert à synthétiser les termes à un seul endroit
 */
export enum PRODUIT{
  ID='id',
  NOM="nom",
  PRIX="prix",
  QUANTITE="quantite",
  DATE="dateCommande"
}
