import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsBankCardIntrfaceComponent } from './tips-bank-card-intrface.component';

describe('TipsBankCardIntrfaceComponent', () => {
  let component: TipsBankCardIntrfaceComponent;
  let fixture: ComponentFixture<TipsBankCardIntrfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsBankCardIntrfaceComponent]
    });
    fixture = TestBed.createComponent(TipsBankCardIntrfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
