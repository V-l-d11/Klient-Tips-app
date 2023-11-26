import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUserDetailsHeaderComponent } from './tips-user-details-header.component';

describe('TipsUserDetailsHeaderComponent', () => {
  let component: TipsUserDetailsHeaderComponent;
  let fixture: ComponentFixture<TipsUserDetailsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUserDetailsHeaderComponent]
    });
    fixture = TestBed.createComponent(TipsUserDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
