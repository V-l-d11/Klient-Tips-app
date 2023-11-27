import { Component } from '@angular/core';

@Component({
  selector: 'app-tips-user-btn-section',
  templateUrl: './tips-user-btn-section.component.html',
  styleUrls: ['./tips-user-btn-section.component.scss'],
})
export class TipsUserBtnSectionComponent {
  isCliked!: boolean;
  spanInfo: string = 'Pay with card';

  handleClikedAddCard() {
    this.isCliked = !this.isCliked;
    if (this.isCliked === true) {
      this.spanInfo = 'Close';
    } else {
      this.spanInfo = 'Pay with card';
    }
  }
}
