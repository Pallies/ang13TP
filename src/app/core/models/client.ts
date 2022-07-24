export class Client {
  public id!:number;
  public nom!:string;
  public prenom!:string;
  public tel!:number;
  public adresse!:string;
  public cp!:string;
  public ville!:string;
}

export enum CLIENT{
  ID= 'id',
  NOM='nom',
  PRENOM= 'prenom',
  TEL= 'tel',
  ADRESSE= 'adresse',
  CODE_POSTAL= 'cp',
  VILLE= 'ville',
}

