import { Profil } from "./profil";

/**
 * La classe Utilisateur va servir à pour la gestion des utilisateurs,
 * les différents employés de l'entreprise
 */
export class Utilisateur {
  public id !: number;
  public nom !: string;
  public prenom !: string;
  public mdp !: string;
  public email !: string;
  public profil !: Profil;
}

/**
 * L'énumération Utilisateur sert à synthétiser les termes à un seul endroit
 */
export enum UTILISATEUR {
  ID = 'id',
  NOM = 'nom',
  PRENOM = 'prenom',
  EMAIL = 'email',
  PROFIL = 'profil'
}
