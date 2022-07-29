export enum URL_BACK{
    CLIENT="clients",
    UTILISATEUR="utilisateurs",
    DEVIS="devis",
    VENTE_VEHICULE="venteVehicules",
    FACTURE="facture",
    VEHICULE="vehicules",
    TACHE="taches",
    PRODUIT='produits',
    TACHE_A_EFFECTUER='tachesEffectuer',
    ENTRETIEN='entretiens'
}
export function singularUrl(relationship:string){
  return relationship.slice(0,relationship.length-1)
}
