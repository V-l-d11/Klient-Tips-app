import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUserBtnSectionComponent } from './tips-user-btn-section.component';

describe('TipsUserBtnSectionComponent', () => {
  let component: TipsUserBtnSectionComponent;
  let fixture: ComponentFixture<TipsUserBtnSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUserBtnSectionComponent]
    });
    fixture = TestBed.createComponent(TipsUserBtnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
