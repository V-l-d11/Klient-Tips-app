import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { TipsUserSectionForCardComponent } from './tips-user-section-for-card.component';
import { TipsPersonsDetailsDataService } from '../../../services/tips-persons-details-data/tips-persons-details-data.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange, SimpleChanges } from '@angular/core';

describe('TipsUserSectionForCardComponent', () => {
  let component: TipsUserSectionForCardComponent;
  let fixture: ComponentFixture<TipsUserSectionForCardComponent>;
  let formData: FormGroup;
  let serviceSpy: jasmine.SpyObj<TipsPersonsDetailsDataService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TipsPersonsDetailsDataService', ['loadUser']);
    await TestBed.configureTestingModule({
      declarations: [TipsUserSectionForCardComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: TipsPersonsDetailsDataService, useValue: spy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    serviceSpy = TestBed.inject(TipsPersonsDetailsDataService) as jasmine.SpyObj<TipsPersonsDetailsDataService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUserSectionForCardComponent);
    component = fixture.componentInstance;
    formData = new FormGroup({
      testControl: new FormControl('testValue'),
    });
    component.formData = formData;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit payWithCardClick event when handlePayWithCard is called', () => {
    spyOn(component.payWithCardClick, 'emit');
    component.handlePayWithCard(true);
    expect(component.payWithCardClick.emit).toHaveBeenCalledWith(true);
  });

  it('should log form data changes when ngOnChanges is called with formData changes', () => {
    const changes: SimpleChanges = {
      formData: new SimpleChange(null, { value: 'testValue' }, true)
    };
  
    spyOn(console, 'log');
    component.ngOnChanges(changes);
    expect(console.log).toHaveBeenCalledWith('Received Form Data in TipsUserSectionForCardComponent', 'testValue');
  });
});
