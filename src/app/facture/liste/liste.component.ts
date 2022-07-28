import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Devis } from 'src/app/core/models/devis';

@Component({
  selector: 'car-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  factures!: Devis[];
  constructor(private router: Router, private route: ActivatedRoute) {
    this.factures = (this.route.snapshot.data[URL_SNAPSHOT.DATA_DEVIS] as Array<Devis>).filter(d => d.statut);
  }

  onBack() {
    this.router.navigate(['/menu']);
  }

  ngOnInit(): void {
  }

}
