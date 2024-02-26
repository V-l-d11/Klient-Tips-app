import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TipsPrevPageComponent } from './tips-prev-page.component';

describe('TipsPrevPageComponent', () => {
  let component: TipsPrevPageComponent;
  let fixture: ComponentFixture<TipsPrevPageComponent>;
  let mockActivatedRoute: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        queryParams: { paymentStatus: 'true' } // Simulating queryParams for testing
      }
    };

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ TipsPrevPageComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsPrevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isPaymentError to true if paymentStatus is true', () => {
    expect(component.isPaymentError).toBe(true);
  });

  it('should navigate to home when handleClicktoBack is called', () => {
    component.handleClicktoBack();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
  });
});
