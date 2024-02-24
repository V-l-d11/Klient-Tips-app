import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Импортируем FormsModule
import { TipsSearchSectionComponent } from './tips-search-section.component';

describe('TipsSearchSectionComponent', () => {
  let component: TipsSearchSectionComponent;
  let fixture: ComponentFixture<TipsSearchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsSearchSectionComponent],
      imports: [FormsModule], // Добавляем FormsModule в imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search term when onInputChange is called', () => {
    spyOn(component.searchChanged, 'emit');
    const searchInput = 'test search';
    component.searchTerms = searchInput;
    component.onInputChange();
    expect(component.searchChanged.emit).toHaveBeenCalledWith(searchInput);
  });
});
