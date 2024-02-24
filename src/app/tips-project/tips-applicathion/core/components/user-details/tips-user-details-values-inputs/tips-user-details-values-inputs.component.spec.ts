import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsUserDetailsValuesInputsComponent } from './tips-user-details-values-inputs.component';

describe('TipsUserDetailsValuesInputsComponent', () => {
  let component: TipsUserDetailsValuesInputsComponent;
  let fixture: ComponentFixture<TipsUserDetailsValuesInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsUserDetailsValuesInputsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUserDetailsValuesInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('clickOtherAmount method should toggle isClicked property and emit event', () => {
    spyOn(component.isClik, 'emit');
    component.isCliked = false;

    component.clickOtherAmount();
    expect(component.isCliked).toBeTruthy();
    expect(component.isClik.emit).toHaveBeenCalledWith(true);

    component.clickOtherAmount();
    expect(component.isCliked).toBeFalsy();
    expect(component.isClik.emit).toHaveBeenCalledWith(false);
  });

  it('selectAmount method should set selectedAmount property and emit event', () => {
    spyOn(component.amountSelected, 'emit');
    const amount = 100;

    component.selectAmount(amount);
    expect(component.selectedAmount).toEqual(amount);
    expect(component.amountSelected.emit).toHaveBeenCalledWith(amount);
  });
});
