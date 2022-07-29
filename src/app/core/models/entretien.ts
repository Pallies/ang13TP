import { Client } from 'src/app/core/models/client';
import { Tache } from './tache';

/**
 * La classe Entretien va servir à la gestion des entretiens,
 * prestations qu'un client demande
 */
export class Entretien {
  public id:number=0;
  public client!:Client;
  public clientId!:number;
  public dateCreation!:string;
  public prixTTC:number=0;
  public taches:Tache[]=[];
  public terminer:boolean=false;
}

/**
 * L'énumération Entretien sert à synthétiser les termes à un seul endroit
 */
export enum ENTRETIEN{
  ID= 'id',
  CLIENT='client',
  CLIENT_ID='clientId',
  DATE='dateCreation',
  PRIX='prixTTC',
  TACHE='taches',
  VALIDE='terminer',
}
