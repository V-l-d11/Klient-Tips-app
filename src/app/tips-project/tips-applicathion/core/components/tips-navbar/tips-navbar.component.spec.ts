import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { TipsNavbarComponent } from './tips-navbar.component';

describe('TipsNavbarComponent', () => {
  let component: TipsNavbarComponent;
  let fixture: ComponentFixture<TipsNavbarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsNavbarComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to restaurants page when handleHomePage is called', () => {
    const spy = spyOn(router, 'navigate');
    component.handleHomePage();
    expect(spy).toHaveBeenCalledWith(['restaurants']);
  });
});

