import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUserConditionalInputSecComponent } from './tips-user-conditional-input-sec.component';

describe('TipsUserConditionalInputSecComponent', () => {
  let component: TipsUserConditionalInputSecComponent;
  let fixture: ComponentFixture<TipsUserConditionalInputSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUserConditionalInputSecComponent]
    });
    fixture = TestBed.createComponent(TipsUserConditionalInputSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
