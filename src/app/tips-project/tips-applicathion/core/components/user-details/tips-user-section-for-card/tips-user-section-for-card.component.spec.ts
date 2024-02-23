import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUserSectionForCardComponent } from './tips-user-section-for-card.component';

describe('TipsUserSectionForCardComponent', () => {
  let component: TipsUserSectionForCardComponent;
  let fixture: ComponentFixture<TipsUserSectionForCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUserSectionForCardComponent]
    });
    fixture = TestBed.createComponent(TipsUserSectionForCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
