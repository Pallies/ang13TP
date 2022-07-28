import { Produit } from "src/app/core/models/produit";
import { Tache } from "src/app/core/models/tache";

export class Menu {
  public taches!: Tache[];
  public categories!: string[];
  public noms!: string[];
  public produits!: Produit[];
}
