import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsMainPageComponent } from './tips-main-page.component';

describe('TipsMainPageComponent', () => {
  let component: TipsMainPageComponent;
  let fixture: ComponentFixture<TipsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsMainPageComponent]
    });
    fixture = TestBed.createComponent(TipsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
