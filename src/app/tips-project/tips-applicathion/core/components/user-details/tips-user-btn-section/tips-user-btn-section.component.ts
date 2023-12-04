import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tips-user-btn-section',
  templateUrl: './tips-user-btn-section.component.html',
  styleUrls: ['./tips-user-btn-section.component.scss'],
})
export class TipsUserBtnSectionComponent {
  @Output() formSubmitToParent: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  isCliked!: boolean;
  spanInfo: string = 'Pay with card';

  handleFormSubmission(form: FormGroup) {
    console.log(form);
    this.formSubmitToParent.emit(form);
  }

  handleClikedAddCard() {
    this.isCliked = !this.isCliked;
    if (this.isCliked === true) {
      this.spanInfo = 'Close';
    } else {
      this.spanInfo = 'Pay with card';
    }
  }
}
