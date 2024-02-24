import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsUserDetailsHeaderComponent } from './tips-user-details-header.component';
import { Employer } from 'src/app/models/users';

describe('TipsUserDetailsHeaderComponent', () => {
  let component: TipsUserDetailsHeaderComponent;
  let fixture: ComponentFixture<TipsUserDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsUserDetailsHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUserDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not throw error if data is null', () => {
    component.data = null;
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should log data to console', () => {
    spyOn(console, 'log');
    const mockData: Employer = { id: 1, firstName: 'John', lastName: 'Doe' };
    component.data = mockData;
    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith(mockData, 'THis Data HEadersdfsdf');
  });

  it('should access firstName property of data', () => {
    const mockData: Employer = { id: 1, firstName: 'John', lastName: 'Doe' };
    component.data = mockData;
    expect(() => component.ngOnInit()).not.toThrow();
  });
});
