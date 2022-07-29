import { Component, OnInit } from '@angular/core';
import { ROUTES_MENU } from '../core/guards/url-front.routes';
import { AuthService } from '../core/services/auth.service';

/**
 * Composant relatifs aux différents menus
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(public auth: AuthService) {}
  routesMenu= ROUTES_MENU;
  ngOnInit(): void {}
}
