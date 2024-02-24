import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'; // Импорт FormControl
import { of, throwError } from 'rxjs';
import { TipsPersonsDetailsDataService } from '../../services/tips-persons-details-data/tips-persons-details-data.service';
import { TipsTransactionsDataService } from '../../services/tips-transactions-data/tips-transactions-data.service';
import { TipsUserTipPageComponent } from './tips-user-tip-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TipsUserTipPageComponent', () => {
  let component: TipsUserTipPageComponent;
  let fixture: ComponentFixture<TipsUserTipPageComponent>;
  let mockActivatedRoute: any;
  let mockRouter: any;
  let mockLoadUserInfoService: any;
  let mockTipService: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      params: of({ id: 1 }) // Simulating params for testing
    };

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    mockLoadUserInfoService = jasmine.createSpyObj('TipsPersonsDetailsDataService', ['loadUserElement']);
    mockLoadUserInfoService.tip$ = of(100); // Simulating tip$

    mockTipService = jasmine.createSpyObj('TipsTransactionsDataService', ['setTipData', 'setChangeBox', 'payTip']);

    await TestBed.configureTestingModule({
      declarations: [ TipsUserTipPageComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: TipsPersonsDetailsDataService, useValue: mockLoadUserInfoService },
        { provide: TipsTransactionsDataService, useValue: mockTipService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUserTipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set paymentError to true and disable submit when payTip service call fails', () => {
    
    mockTipService.payTip.and.returnValue(throwError('Payment error'));
  
    component.handlePayWithCardClick(true);
  
    expect(component.paymentError).toBe(true);
    expect(component.submitDisabled).toBe(true);
  });

  it('should navigate to paymentStatus with paymentStatus true when payTip service call is successful', () => {
    mockTipService.payTip.and.returnValue(of({}));
    component.handlePayWithCardClick(true);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['paymentStatus'], { queryParams: { paymentStatus: true } });
  });

  it('should set card number and payment method when form is submitted', () => {
    const form = new FormGroup({ // Создание FormGroup с FormControl
      cardNumber: new FormControl('1234-5678-9012-3456')
    });
    component.handleFormSubmitCard(form);
    expect(mockTipService.setTipData).toHaveBeenCalledWith({ card_number: '1234567890123456' });
    expect(mockTipService.setTipData).toHaveBeenCalledWith({ payment_method: 'card' });
  });

  it('should set amount and currency when amount is selected', () => {
    component.handleAmountSelected(50);
    expect(mockTipService.setChangeBox).toHaveBeenCalledWith({ amount: 50 });
    expect(mockTipService.setTipData).toHaveBeenCalledWith({ amount: 50 });
    expect(mockTipService.setTipData).toHaveBeenCalledWith({ currency: 'pln' });
  });

  it('should set amount and currency when input element value is changed', () => {
    component.handleInputElChanged('123456');
    expect(mockTipService.setChangeBox).toHaveBeenCalledWith({ amount: 123456 });
    expect(mockTipService.setTipData).toHaveBeenCalledWith({ amount: 123456 });
    expect(mockTipService.setTipData).toHaveBeenCalledWith({ currency: 'pln' });
  });

  it('should unsubscribe from activated route on component destruction', () => {
    spyOn((component as any).subscription, 'unsubscribe'); // Приведение к any для доступа к приватному свойству
    component.ngOnDestroy();
    expect((component as any).subscription.unsubscribe).toHaveBeenCalled();
  });
});
