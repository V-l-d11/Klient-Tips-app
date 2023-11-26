import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUserDetailsValuesInputsComponent } from './tips-user-details-values-inputs.component';

describe('TipsUserDetailsValuesInputsComponent', () => {
  let component: TipsUserDetailsValuesInputsComponent;
  let fixture: ComponentFixture<TipsUserDetailsValuesInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUserDetailsValuesInputsComponent]
    });
    fixture = TestBed.createComponent(TipsUserDetailsValuesInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
