export class Devis {
  public id: number=0;
  public dateCreation!: string;
  public quantiteTotal: number = 0;
  public prixHT!: number;
  // public clients!: Client;
  public clientId!: number;
  public venteVehiculeId: number[] = [];
}

export enum DEVIS {
  ID = 'id',
  DATE = 'dateCreation',
  QUANTITE = 'quantiteTotal',
  PRIX = 'prixHT',
  CLIENT = 'clients',
  CLIENT_ID = 'clientId',
  VEHICULES_VENDUS_ID = 'venteVehiculeId',
}
