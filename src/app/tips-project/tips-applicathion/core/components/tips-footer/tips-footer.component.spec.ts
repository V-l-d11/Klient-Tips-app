import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsFooterComponent } from './tips-footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TipsFooterComponent', () => {

  let component: TipsFooterComponent;
  let fixture: ComponentFixture<TipsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsFooterComponent], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
