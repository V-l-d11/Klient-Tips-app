import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsUsersListComponent } from './tips-users-list.component';

describe('TipsUsersListComponent', () => {
  let component: TipsUsersListComponent;
  let fixture: ComponentFixture<TipsUsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsUsersListComponent]
    });
    fixture = TestBed.createComponent(TipsUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
