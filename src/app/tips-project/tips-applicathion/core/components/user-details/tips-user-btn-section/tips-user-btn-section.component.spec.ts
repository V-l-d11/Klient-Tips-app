import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { TipsUserBtnSectionComponent } from './tips-user-btn-section.component';

describe('TipsUserBtnSectionComponent', () => {
  let component: TipsUserBtnSectionComponent;
  let fixture: ComponentFixture<TipsUserBtnSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsUserBtnSectionComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUserBtnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit formSubmitToParent event with form data', () => {
    spyOn(component.formSubmitToParent, 'emit');
    const form = new FormGroup({
      cardNumber: new FormControl('1234-5678-9012-3456'),
    });
    component.handleFormSubmission(form);
    expect(component.formSubmitToParent.emit).toHaveBeenCalledWith(form);
  });

  it('should emit payWithCardClick event with true when handlePayWithCardClick is called', () => {
    spyOn(component.payWithCardClick, 'emit');
    component.handlePayWithCardClick(true);
    expect(component.payWithCardClick.emit).toHaveBeenCalledWith(true);
  });

  it('should update spanInfo and toggle isCliked when handleClikedAddCard is called', () => {
    component.isCliked = false;
    component.spanInfo = 'Pay with card';
    component.handleClikedAddCard();
    expect(component.spanInfo).toEqual('Close');
    expect(component.isCliked).toBeTruthy();
    component.handleClikedAddCard();
    expect(component.spanInfo).toEqual('Pay with card');
    expect(component.isCliked).toBeFalsy();
  });

  
});

