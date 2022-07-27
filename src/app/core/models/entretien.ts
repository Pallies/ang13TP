import { Produit } from './produit';
import { Tache } from './tache';

export class Entretien {
  public id:number=0;
  public tache:Tache[]=[];
  public produit:Produit[]=[];
}
