import { Profil } from "./profil";

export class Utilisateur {
  public id !: number;
  public nom !: string;
  public prenom !: string;
  public mdp !: string;
  public email !: string;
  public profil !: Profil;
}
