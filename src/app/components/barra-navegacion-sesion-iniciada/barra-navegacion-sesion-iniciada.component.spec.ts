import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionSesionIniciadaComponent } from './barra-navegacion-sesion-iniciada.component';

describe('BarraNavegacionSesionIniciadaComponent', () => {
  let component: BarraNavegacionSesionIniciadaComponent;
  let fixture: ComponentFixture<BarraNavegacionSesionIniciadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionSesionIniciadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavegacionSesionIniciadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
