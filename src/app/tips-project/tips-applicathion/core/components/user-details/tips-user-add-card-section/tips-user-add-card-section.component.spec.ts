import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUserAddCardSectionComponent } from './tips-user-add-card-section.component';

describe('TipsUserAddCardSectionComponent', () => {
  let component: TipsUserAddCardSectionComponent;
  let fixture: ComponentFixture<TipsUserAddCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUserAddCardSectionComponent]
    });
    fixture = TestBed.createComponent(TipsUserAddCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
