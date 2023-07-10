import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecomendadoComponent } from './card-recomendado.component';

describe('CardRecomendadoComponent', () => {
  let component: CardRecomendadoComponent;
  let fixture: ComponentFixture<CardRecomendadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRecomendadoComponent]
    });
    fixture = TestBed.createComponent(CardRecomendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
