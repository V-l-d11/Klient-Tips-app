import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsSearchSectionComponent } from './tips-search-section.component';

describe('TipsSearchSectionComponent', () => {
  let component: TipsSearchSectionComponent;
  let fixture: ComponentFixture<TipsSearchSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsSearchSectionComponent]
    });
    fixture = TestBed.createComponent(TipsSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
