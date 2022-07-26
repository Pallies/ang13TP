import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devis } from 'src/app/core/models/devis';
import { ApiService } from 'src/app/core/services/api.service';
import { DevisVenteService } from '../devis-vente.service';

@Component({
  selector: 'car-liste-devis',
  templateUrl: './liste-devis.component.html',
  styleUrls: ['./liste-devis.component.css']
})
export class ListeDevisComponent implements OnInit {

  allDevis!: Devis[];

  constructor(private devis: DevisVenteService, private router: Router,
    private route: ActivatedRoute, private apiService: ApiService<Devis>) { }

  onBack() {
    this.router.navigate(['/menu/vehicules']);
  }

  ngOnInit(): void {
    this.allDevis = this.route.snapshot.data['dataDevis'];
  }

}
