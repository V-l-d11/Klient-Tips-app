import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TipsUserAddCardSectionComponent } from './tips-user-add-card-section.component';

describe('TipsUserAddCardSectionComponent', () => {
  let component: TipsUserAddCardSectionComponent;
  let fixture: ComponentFixture<TipsUserAddCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsUserAddCardSectionComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUserAddCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty cardNumber field', () => {
    expect(component.myForm.get('cardNumber')?.value).toEqual('');
  });

  it('should update visualCardNumber on input change', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = '1234567890123456';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.visualCardNumber).toEqual('1234-5678-9012-3456');
  });

  it('should emit formSubmit event on valid form submission', () => {
    spyOn(component.formSubmit, 'emit');
    component.myForm.patchValue({ cardNumber: '1234-5678-9012-3456' });
    component.onSubmit(component.myForm);
    expect(component.formSubmit.emit).toHaveBeenCalledWith(component.myForm);
  });

  it('should not emit formSubmit event on invalid form submission', () => {
    spyOn(component.formSubmit, 'emit');
    component.onSubmit(component.myForm);
    expect(component.formSubmit.emit).not.toHaveBeenCalled();
  });

 
});
