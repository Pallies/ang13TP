import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css'],
})
export class EntretienComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  onBack() {
    this.router.navigate(['/menu']);
  }

  ngOnInit(): void {}
}
