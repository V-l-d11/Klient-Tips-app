import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Импортируем FormsModule или ReactiveFormsModule
import { TipsUserConditionalInputSecComponent } from './tips-user-conditional-input-sec.component';

describe('TipsUserConditionalInputSecComponent', () => {
  let component: TipsUserConditionalInputSecComponent;
  let fixture: ComponentFixture<TipsUserConditionalInputSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsUserConditionalInputSecComponent],
      imports: [FormsModule] // Импортируем FormsModule или ReactiveFormsModule здесь
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUserConditionalInputSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit parentInputValue event with inputEl value when inputAmount is called', () => {
    spyOn(component.parentInputValue, 'emit');
    component.inputEl = '10';
    component.inputAmount();
    expect(component.parentInputValue.emit).toHaveBeenCalledWith('10');
  });

  it('should emit amountSelected event with selectedAmount value when selectAmount is called', () => {
    spyOn(component.amountSelected, 'emit');
    component.selectAmount(5);
    expect(component.selectedAmount).toEqual(5);
    expect(component.amountSelected.emit).toHaveBeenCalledWith(5);
  });

  it('should set errorMessage to "Invalid input value. Please enter a number" if inputEl is not a number', () => {
    component.inputEl = 'abc';
    component.inputAmount();
    expect(component.errorMessage).toEqual('Invalid input value. Please enter a number');
  });

  it('should set errorMessage to "Invalid input value. Please enter a number greater than or equal to $1." if inputEl is less than 2', () => {
    component.inputEl = '1';
    component.inputAmount();
    expect(component.errorMessage).toEqual('Invalid input value. Please enter a number greater than or equal to $1.');
  });

  it('should emit parentInputValue event with inputEl value if inputEl is a valid number greater than or equal to 2', () => {
    spyOn(component.parentInputValue, 'emit');
    component.inputEl = '5';
    component.inputAmount();
    expect(component.errorMessage).toBeNull();
    expect(component.parentInputValue.emit).toHaveBeenCalledWith('5');
  });

  
});

