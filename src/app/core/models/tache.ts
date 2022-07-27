import { Produit } from "./produit";

export class Tache {
  public id: number = 0;
  public categorie!: string;
  public nom!: string;
  public prix!: number;
  public produits:Produit[]=[];
}
