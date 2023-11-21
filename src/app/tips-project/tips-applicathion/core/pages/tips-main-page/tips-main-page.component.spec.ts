import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsMainPageComponent } from './tips-main-page.component';
import { TipsNavbarComponent } from '../../components/tips-navbar/tips-navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TipsMainPageComponent', () => {
  let component: TipsMainPageComponent;
  let fixture: ComponentFixture<TipsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsMainPageComponent, TipsNavbarComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(TipsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
