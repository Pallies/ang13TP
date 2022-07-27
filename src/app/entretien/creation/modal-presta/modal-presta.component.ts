import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'car-modal-presta',
  templateUrl: './modal-presta.component.html',
  styleUrls: ['./modal-presta.component.css']
})
export class ModalPrestaComponent implements OnInit {
@Input() ref!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
