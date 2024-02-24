import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { TipsUsersListComponent } from './tips-users-list.component';


describe('TipsUsersListComponent', () => {
  let component: TipsUsersListComponent;
  let fixture: ComponentFixture<TipsUsersListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsUsersListComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsUsersListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to user details with correct ID', () => {
    spyOn(router, 'navigate').and.stub(); 
    const userId = 123; 
    component.linkForUser({ id: userId }); 
    expect(router.navigate).toHaveBeenCalledWith(['user', userId]); 
  });
  
});
