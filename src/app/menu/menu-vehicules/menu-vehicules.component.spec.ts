import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVehiculesComponent } from './menu-vehicules.component';

describe('MenuVehiculesComponent', () => {
  let component: MenuVehiculesComponent;
  let fixture: ComponentFixture<MenuVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVehiculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
