/**
 * La classe Client va servir à la gestion des clients qui viennent pour une prestation
 */
export class Client {
  public id!: number;
  public nom!: string;
  public prenom!: string;
  public tel!: number;
  public adresse!: string;
  public cp!: string;
  public ville!: string;
}

/**
 * L'énumération Client sert à synthétiser les termes à un seul endroit
 */
export enum CLIENT {
  ID = 'id',
  NOM = 'nom',
  PRENOM = 'prenom',
  TEL = 'tel',
  ADRESSE = 'adresse',
  CODE_POSTAL = 'cp',
  VILLE = 'ville',
}
