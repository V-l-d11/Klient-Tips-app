import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsPrevPageComponent } from './tips-prev-page.component';

describe('TipsPrevPageComponent', () => {
  let component: TipsPrevPageComponent;
  let fixture: ComponentFixture<TipsPrevPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsPrevPageComponent]
    });
    fixture = TestBed.createComponent(TipsPrevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
