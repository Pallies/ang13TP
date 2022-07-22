import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'car-menu',
  template: `
    <div class="col mt-5">
      <a [routerLink]="routerLink" class="h5"
        ><button class="btn-menu">
          <!-- inject les données qui se trouve dans la balise <car-menu> -->
          <ng-content></ng-content>
        </button></a>
    </div>
  `,
  styles:[`.btn-menu {
    width: 350px;
    height: 150px;
  }`],
})
export class MenuComponent implements OnInit {
  @Input() routerLink!:string;
  constructor() {}

  ngOnInit(): void {}
}
