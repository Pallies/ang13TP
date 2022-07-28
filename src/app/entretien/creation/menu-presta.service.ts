import { Produit } from 'src/app/core/models/produit';
import { PRODUIT } from './../../core/models/produit';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { TACHE, Tache } from 'src/app/core/models/tache';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Entretien } from 'src/app/core/models/entretien';
import { Menu } from './menu-entretien';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MenuPrestaService {
  menu: BehaviorSubject<Menu> = new BehaviorSubject<Menu>(new Menu());
  nomsTab!: string[][];
  entretien: BehaviorSubject<Entretien> = new BehaviorSubject<Entretien>(
    new Entretien()
  );
  tacheForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) {
    this.tacheForm = this.formBuilder.group({
      [TACHE.ID]: this.formBuilder.control(''),
      [TACHE.CATEGORIE]: this.formBuilder.control(''),
      [TACHE.NOM]: this.formBuilder.control({ value: '', disabled: true }),
      [TACHE.PRIX]: this.formBuilder.control(0),
      [TACHE.PRODUIT]: this.formBuilder.array([]),
    });
  }
  // initialisation menu
  initMenu(taches: Tache[]) {
    let menu = new Menu();
    menu.taches = taches;
    menu.categories = taches
      .map((t) => t.categorie)
      .filter((c, i, a) => i == a.indexOf(c));
    this.nomsTab = menu.categories.map((c) =>
      taches.filter((t) => t.categorie == c).map((t) => t.nom)
    );
    this.menu.next(menu);
  }
  // selection des noms apres selection de la categorie
  // sauvegarde dans le menu
  selectionNom(categorie: string) {
    let index = 0;
    [this.value].map((menu) => {
      index = menu.categories
        .map((c, i) => (c == categorie ? i : 0))
        .reduce((a, b) => a + b);
    });
    this.value.noms = this.nomsTab[index];
    this.getControl(TACHE.NOM)?.enable();
    this.menu.next({ ...this.value });
  }
  // selection des produits apres la selection du nom
  // sauvegarde dans le menu
  selectionProduit(nom: string) {
    const categorie = this.getControl(TACHE.CATEGORIE)?.value;
    this.value.produits = this.value.taches
      .filter((t) => t.categorie == categorie && t.nom == nom)
      .flatMap((t) => t.produits);
    this.produitCtrl.clear();
    this.value.produits.forEach((v) =>
      this.produitCtrl.push(this.transformCtrl(v))
    );

    this.menu.next({ ...this.value });
  }
  get value() {
    return this.menu.getValue();
  }
  get produitCtrl() {
    return this.tacheForm.get(TACHE.PRODUIT) as FormArray;
  }
  // enregistrement de la tache dans l'entretien
  validationTache() {
    const entretien = this.entretien.getValue();
    const tache: Tache = this.tacheForm.value as Tache;
    entretien.taches.push(tache);
    this.entretien.next({...entretien});
    this.tacheForm.reset()
  }
  // suppression d'une Tache
  suppressionTache(index: number) {
    console.log(this.entretien.getValue().taches.length)
    const tache =this.entretien.getValue().taches.filter((t, i) => i != index);
    this.entretien.getValue().taches=tache;
    this.entretien.next({...this.entretien.getValue()});
  }
  // raccourci de controls
  getControl(name: string) {
    return this.tacheForm.get(name);
  }
  // transformation d'un produit en FormGroup
  // pour l'insertion dans le formArray
  transformCtrl(produit: Produit) {
    return this.formBuilder.group({
      [PRODUIT.ID]: this.formBuilder.control(produit.id),
      [PRODUIT.NOM]: this.formBuilder.control(produit.nom),
      [PRODUIT.PRIX]: this.formBuilder.control(produit.prix),
      [PRODUIT.QUANTITE]: this.formBuilder.control(0),
      [PRODUIT.DATE]: this.formBuilder.control(
        this.datePipe.transform(new Date(), 'dd/MM/yyyy', 'fr')
      ),
    });
  }
}
