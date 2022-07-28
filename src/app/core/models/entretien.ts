import { Client } from 'src/app/core/models/client';
import { Tache } from './tache';

export class Entretien {
  public id:number=0;
  public client!:Client;
  public dateCreation!:string;
  public prixTTC:number=0;
  public taches:Tache[]=[];
  public terminer:boolean=false;
}
