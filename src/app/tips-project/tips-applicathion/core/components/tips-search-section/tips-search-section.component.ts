import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-tips-search-section',
  templateUrl: './tips-search-section.component.html',
  styleUrls: ['./tips-search-section.component.scss'],
})
export class TipsSearchSectionComponent {
  searchTerms: string = '';
  @Output() searchChanged = new EventEmitter<string>();

  onInputChange() {
    this.searchChanged.emit(this.searchTerms);
  }
}
