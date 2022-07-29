import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Tache, TacheEffectuer } from 'src/app/core/models/tache';
import { Produit } from 'src/app/core/models/produit';

@Injectable({
  providedIn: 'root',
})
export class ListeTacheService {
  entretienId:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  tacheEffectuer: TacheEffectuer[];
  tache: BehaviorSubject<Tache[]> = new BehaviorSubject<
  Tache[]
>([]);
  produits: Produit[];
  constructor(private route: ActivatedRoute) {
    this.entretienId.next(this.route.snapshot.params?.['id']);
    this.tacheEffectuer=this.route.snapshot.data[URL_SNAPSHOT.DATA_TACHE_EFFECTUER ] as TacheEffectuer[]
    this.produits= this.route.snapshot.data[URL_SNAPSHOT.DATA_PRODUIT] as Produit[]
  }
   rechercheTache(params: number) {
    this.tache.next(this.tacheEffectuer.filter((t) => t.entretienId == params)
      .map((t) => {
        const tache=new Tache()
        tache.setTache(t)
        tache.setProduits(this.rechercherProduit(t.produitId));
        return tache;
      }))
  }
   rechercherProduit(ids: number[]): Produit[] {
    return this.produits.filter((p) => ids.includes(p.id));
  }

}
