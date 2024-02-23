import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsFirstPageRestaurantsListComponent } from './tips-first-page-restaurants-list.component';

describe('TipsFirstPageRestaurantsListComponent', () => {
  let component: TipsFirstPageRestaurantsListComponent;
  let fixture: ComponentFixture<TipsFirstPageRestaurantsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsFirstPageRestaurantsListComponent]
    });
    fixture = TestBed.createComponent(TipsFirstPageRestaurantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
