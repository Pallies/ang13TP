import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ClientsComponent } from './clients/clients.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [VehiculesComponent, ClientsComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports:[VehiculesComponent, ClientsComponent]
})
export class MenuModule {}
