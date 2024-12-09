import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCombustivelComponent } from './calculadora-combustivel.component';

describe('CalculadoraCombustivelComponent', () => {
  let component: CalculadoraCombustivelComponent;
  let fixture: ComponentFixture<CalculadoraCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraCombustivelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
