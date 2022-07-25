import { Client } from "./client";
import { Vehicule } from "./vehicule";

export class Devis {
  public id!:number;
  public dateCreation!: string;
  public prixTTC!:number;
  public client!:Client;
  public vehicules!:Vehicule[];
}
