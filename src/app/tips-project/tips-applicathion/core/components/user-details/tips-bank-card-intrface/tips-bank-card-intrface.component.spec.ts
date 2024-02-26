import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsBankCardIntrfaceComponent } from './tips-bank-card-intrface.component';

describe('TipsBankCardIntrfaceComponent', () => {
  let component: TipsBankCardIntrfaceComponent;
  let fixture: ComponentFixture<TipsBankCardIntrfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsBankCardIntrfaceComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsBankCardIntrfaceComponent);
    component = fixture.componentInstance;
    component.data = { cardNumber: '1234 5678 9012 3456' };
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
