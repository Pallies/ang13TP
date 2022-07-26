import { Profil } from '../models/profil';
export enum RoutesProfil {
  MENU = '/menu',
  MENU_CLIENT = '/menu/clients',
  MENU_STOCK = '',
  MENU_ENTRETIEN = '',
  MENU_VEHICULE = '/menu/vehicules',
  MENU_TACHE = '',
  MENU_UTILISATEUR = '/menu/utilisateurs',
  MENU_DEVIS = '/menu/clients',
}

export enum URL_SNAPSHOT{
  DATA_UTILISATEUR="dataUtilisateurs",
  DATA_VEHICULE="dataVehicules",
  DATA_CLIENT="dataClients",
  DATA_DEVIS="dataDevis",
  DATA_VENTE_VEHICULE="dataVenteVehicules"

}
export const gestionProfil = {
  [Profil.ADMIN]: [
    RoutesProfil.MENU,
    RoutesProfil.MENU_CLIENT,
    RoutesProfil.MENU_STOCK,
    RoutesProfil.MENU_ENTRETIEN,
    RoutesProfil.MENU_VEHICULE,
    RoutesProfil.MENU_TACHE,
    RoutesProfil.MENU_UTILISATEUR
  ],
  [Profil.CHEF]: [
    RoutesProfil.MENU,
    RoutesProfil.MENU_CLIENT,
    RoutesProfil.MENU_STOCK,
    RoutesProfil.MENU_ENTRETIEN,
    RoutesProfil.MENU_TACHE
  ],
  [Profil.MAG]: [
    RoutesProfil.MENU,
    RoutesProfil.MENU_STOCK,
    RoutesProfil.MENU_ENTRETIEN,
    RoutesProfil.MENU_VEHICULE,
  ],
  [Profil.MECA]: [
     RoutesProfil.MENU,
    RoutesProfil.MENU_ENTRETIEN,
    RoutesProfil.MENU_TACHE,
  ],
  [Profil.COM]: [
    RoutesProfil.MENU_CLIENT,
    RoutesProfil.MENU_VEHICULE,
  ],
};
