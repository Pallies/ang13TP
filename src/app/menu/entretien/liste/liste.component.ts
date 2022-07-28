import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'car-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  onBack() {
    this.router.navigate(['/menu/entretien']);
  }

  ngOnInit(): void {
  }

}
