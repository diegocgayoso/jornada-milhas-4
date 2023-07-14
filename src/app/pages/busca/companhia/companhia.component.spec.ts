import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanhiaComponent } from './companhia.component';

describe('CompanhiaComponent', () => {
  let component: CompanhiaComponent;
  let fixture: ComponentFixture<CompanhiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanhiaComponent]
    });
    fixture = TestBed.createComponent(CompanhiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
