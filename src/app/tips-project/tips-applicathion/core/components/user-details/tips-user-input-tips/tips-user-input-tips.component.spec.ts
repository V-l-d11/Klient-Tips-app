import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsUserInputTipsComponent } from './tips-user-input-tips.component';
import { TipsTransactionsDataService } from '../../../services/tips-transactions-data/tips-transactions-data.service';
import { of } from 'rxjs';

describe('TipsUserInputTipsComponent', () => {
  let component: TipsUserInputTipsComponent;
  let fixture: ComponentFixture<TipsUserInputTipsComponent>;
  let mockTipService: jasmine.SpyObj<TipsTransactionsDataService>;

  beforeEach(async () => {
    mockTipService = jasmine.createSpyObj('TipsTransactionsDataService', ['getChangeBoxInput']);
    mockTipService.getChangeBoxInput.and.returnValue(of({ amount: 10 }));

    await TestBed.configureTestingModule({
      declarations: [TipsUserInputTipsComponent],
      providers: [
        { provide: TipsTransactionsDataService, useValue: mockTipService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUserInputTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('toggleCheckbox method should toggle isChecked property', () => {
    component.isChecked = false;

    component.toggleCheckbox();
    expect(component.isChecked).toBeTruthy();

    component.toggleCheckbox();
    expect(component.isChecked).toBeFalsy();
  });

  it('ngOnInit method should subscribe to tipService and update tip property', () => {
    component.ngOnInit();

    expect(component.subscription).toBeDefined();
    expect(mockTipService.getChangeBoxInput).toHaveBeenCalled();
    expect(component.tip).toEqual(10);
  });
}); 
