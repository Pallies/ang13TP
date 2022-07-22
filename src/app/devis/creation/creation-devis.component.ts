import { ActivatedRoute, Router } from '@angular/router';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Vehicule } from 'src/app/core/models/vehicule';
import { DevisVehiculeService } from '../devis-vehicule.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation-devis.component.html',
  styleUrls: ['./creation-devis.component.css'],
})
export class CreationDevisComponent implements OnInit {
  vehicules!: Vehicule[];
  maj$!: Observable<boolean>;
  constructor(
    private route: ActivatedRoute,
    private devis: DevisVehiculeService,
    private router: Router
  ) {

    // this.vehicules = this.route.snapshot.data['dataVehicules'];
  }
  onBack() {
    this.router.navigated=false;
    this.router.navigate(['menu','vehicules']);
  }
  ngOnInit(): void {
    this.vehicules = this.route.snapshot.data['dataVehicules'];
    console.log(this.vehicules)
    this.maj$ = this.devis.commande.pipe(map((_) => true));
  }
  ajouter(vehicule: Vehicule) {
    if (
      vehicule.quantite >= vehicule.quantiteVendu &&
      vehicule.quantiteVendu != 0
    ) {
      vehicule.quantite -= vehicule.quantiteVendu;
      this.devis.add({ ...vehicule });
    }
  }
}
