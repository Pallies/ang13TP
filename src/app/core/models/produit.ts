export class Produit {
    public id:number=0;
    public nom!:string;
    public prix!:number;
    public quantite!:number;
    public dateCommande!:string;
}
export enum PRODUIT{
  ID='id',
  NOM="nom",
  PRIX="prix",
  QUANTITE="quantite",
  DATE="dateCommande"
}
