import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionPrincipalComponent } from './barra-navegacion-principal.component';

describe('BarraNavegacionPrincipalComponent', () => {
  let component: BarraNavegacionPrincipalComponent;
  let fixture: ComponentFixture<BarraNavegacionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavegacionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
