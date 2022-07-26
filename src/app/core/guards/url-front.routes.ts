
import { Profil } from '../models/profil';
export enum RoutesProfil{
  MENU='/menu',
  MENU_CLIENT='/menu/clients',
  MENU_VEHICULE='/menu/vehicules',
  MENU_UTILISATEUR='/menu/utilisateurs',
  MENU_DEVIS='/menu/clients'
}
export enum URL_SNAPSHOT{

  DATA_VEHICULE="dataVehicules",
  DATA_CLIENT="dataClients"
}
export const gestionProfil= {
[Profil.ADMIN]:[RoutesProfil.MENU,RoutesProfil.MENU_CLIENT,RoutesProfil.MENU_UTILISATEUR,RoutesProfil.MENU_VEHICULE],
[Profil.CHEF]:[RoutesProfil.MENU,RoutesProfil.MENU_CLIENT,RoutesProfil.MENU_VEHICULE,],
[Profil.MAG]:[RoutesProfil.MENU,],
[Profil.MECA]:[RoutesProfil.MENU,],
[Profil.COM]:[RoutesProfil.MENU,RoutesProfil.MENU_CLIENT,RoutesProfil.MENU_VEHICULE],
}

