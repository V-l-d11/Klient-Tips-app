import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUserInputTipsComponent } from './tips-user-input-tips.component';

describe('TipsUserInputTipsComponent', () => {
  let component: TipsUserInputTipsComponent;
  let fixture: ComponentFixture<TipsUserInputTipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUserInputTipsComponent]
    });
    fixture = TestBed.createComponent(TipsUserInputTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
