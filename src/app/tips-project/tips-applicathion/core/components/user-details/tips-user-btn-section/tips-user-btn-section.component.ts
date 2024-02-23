import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tips-user-btn-section',
  templateUrl: './tips-user-btn-section.component.html',
  styleUrls: ['./tips-user-btn-section.component.scss'],
})
export class TipsUserBtnSectionComponent {
  @Output() formSubmitToParent: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();
  @Output() payWithCardClick: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @Input() dis!: boolean;

  formData!: FormGroup;
  isFormCom!: boolean;
  isCliked!: boolean;
  spanInfo: string = 'Pay with card';

  handlePayWithCardClick(val: boolean) {
    console.log(val);
    this.payWithCardClick.emit(val);
  }

  handleCloseValue(value: boolean) {
    this.isCliked = value;
  }
  handleFormSubmission(form: FormGroup) {
    console.log(form, 'FORM');
    this.formData = form;
    this.formSubmitToParent.emit(form);
  }

  handleFormSubmitCard(form: FormGroup) {
    console.log('Parant', form);
    this.formData = form;
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
