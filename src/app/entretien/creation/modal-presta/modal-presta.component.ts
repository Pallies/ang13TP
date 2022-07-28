import { EntretienPipe } from 'src/app/shared/pipes/entretien.pipe';
import { Produit } from 'src/app/core/models/produit';
import { FormArray, FormGroup } from '@angular/forms';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable, Subscription, BehaviorSubject, filter } from 'rxjs';
import { Menu } from '../menu-entretien';
import { MenuPrestaService } from '../menu-presta.service';
import { TACHE } from 'src/app/core/models/tache';
import { PRODUIT } from 'src/app/core/models/produit';

@Component({
  selector: 'car-modal-presta',
  templateUrl: './modal-presta.component.html',
  styleUrls: ['./modal-presta.component.css'],
  providers: [EntretienPipe],
})
export class ModalPrestaComponent implements OnInit {
  @Input() ref!: string;

  @ViewChild('close', { static: false }) dimiss!: ElementRef;
  Tache: typeof TACHE = TACHE;
  Produit: typeof PRODUIT = PRODUIT;
  subscription!: Subscription;
  prixTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(
    private menuService: MenuPrestaService,
    private tachePipe: EntretienPipe
  ) {}

  ngOnInit(): void {
    this.menuForm
      .get(TACHE.CATEGORIE)
      ?.valueChanges.subscribe((categorie) =>
        this.menuService.selectionNom(categorie)
      );
    this.menuForm.get(TACHE.NOM)?.valueChanges.subscribe((nom) => {
      this.menuService.selectionProduit(nom);
    });
    this.menuForm.get(TACHE.PRODUIT)?.valueChanges.pipe(filter(p=>p.length>0)).subscribe((produit) => {
      console.log(produit);
      this.prixTotal.next(+this.tachePipe.transform(produit, 'prix'));
    });
  }

  get menu$(): Observable<Menu> {
    return this.menuService.menu;
  }
  get menuForm(): FormGroup {
    return this.menuService.tacheForm;
  }

  getQuantite(i: number): Produit {
    return (this.menuService.tacheForm.get(TACHE.PRODUIT) as FormArray).at(i)
      .value;
  }
  setQuantite(i: number, quantite: any) {
    const produit = this.getQuantite(i);
    produit.quantite = +quantite.target.value;
    (this.menuService.tacheForm.get(TACHE.PRODUIT) as FormArray)
      .at(i)
      .setValue(produit);
  }
  save() {
    this.menuService.validationTache();
    this.dimiss.nativeElement.click();
    this.prixTotal.next(0);
  }
}
