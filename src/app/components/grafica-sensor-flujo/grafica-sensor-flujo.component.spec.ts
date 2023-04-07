import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaSensorFlujoComponent } from './grafica-sensor-flujo.component';

describe('GraficaSensorFlujoComponent', () => {
  let component: GraficaSensorFlujoComponent;
  let fixture: ComponentFixture<GraficaSensorFlujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaSensorFlujoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaSensorFlujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
