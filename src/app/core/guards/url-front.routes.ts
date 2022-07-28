import { Profil } from '../models/profil';

export enum ROUTES_MENU {
  BASE = '/menu',
  CLIENT = '/menu/clients',
  STOCK = '/menu/stock',
  ENTRETIEN = '/menu/entretien',
  VEHICULE = '/menu/vehicules',
  TACHE = 'menu/tache',
  UTILISATEUR = '/menu/utilisateurs',
  DEVIS = '/menu/clients',
  FACTURE = '/factures/liste',
}

export enum URL_SNAPSHOT {
  DATA_UTILISATEUR = 'dataUtilisateurs',
  DATA_VEHICULE = 'dataVehicules',
  DATA_CLIENT = 'dataClients',
  DATA_DEVIS = 'dataDevis',
  DATA_VENTE_VEHICULE = 'dataVenteVehicules',
  DATA_TACHE = 'dataTache',
}
export const gestionProfil = {
  [Profil.ADMIN]: [
    ROUTES_MENU.BASE,
    ROUTES_MENU.CLIENT,
    ROUTES_MENU.STOCK,
    ROUTES_MENU.ENTRETIEN,
    ROUTES_MENU.VEHICULE,
    ROUTES_MENU.TACHE,
    ROUTES_MENU.UTILISATEUR,
    ROUTES_MENU.FACTURE,
  ],
  [Profil.CHEF]: [
    ROUTES_MENU.BASE,
    ROUTES_MENU.CLIENT,
    ROUTES_MENU.STOCK,
    ROUTES_MENU.ENTRETIEN,
    ROUTES_MENU.TACHE,
    ROUTES_MENU.FACTURE,
  ],
  [Profil.MAG]: [
    ROUTES_MENU.BASE,
    ROUTES_MENU.STOCK,
    ROUTES_MENU.ENTRETIEN,
    ROUTES_MENU.VEHICULE,
    ROUTES_MENU.FACTURE,
  ],
  [Profil.MECA]: [ROUTES_MENU.BASE, ROUTES_MENU.ENTRETIEN, ROUTES_MENU.TACHE],
  [Profil.COM]: [
    ROUTES_MENU.BASE,
    ROUTES_MENU.CLIENT,
    ROUTES_MENU.VEHICULE,
    ROUTES_MENU.FACTURE,
  ],
};
