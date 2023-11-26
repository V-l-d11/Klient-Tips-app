import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUserTipPageComponent } from './tips-user-tip-page.component';

describe('TipsUserTipPageComponent', () => {
  let component: TipsUserTipPageComponent;
  let fixture: ComponentFixture<TipsUserTipPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUserTipPageComponent]
    });
    fixture = TestBed.createComponent(TipsUserTipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
