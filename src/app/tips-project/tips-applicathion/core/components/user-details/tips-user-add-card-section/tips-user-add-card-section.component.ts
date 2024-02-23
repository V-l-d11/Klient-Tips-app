import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tips-user-add-card-section',
  templateUrl: './tips-user-add-card-section.component.html',
  styleUrls: ['./tips-user-add-card-section.component.scss'],
})
export class TipsUserAddCardSectionComponent implements OnInit {
  @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() valueEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  myForm!: FormGroup;
  isCliked: boolean = false;
  isFormSubmitted: boolean = false;
  visualCardNumber: string = '';

  sendValue(val: boolean) {
    this.valueEmitter.emit(val);
  }

  onSubmit(form: FormGroup) {
    this.isCliked = true;
    if (this.myForm.valid) {
      this.formSubmit.emit(this.myForm);
      this.isFormSubmitted = true;
      this.sendValue(false);
    } else {
      console.log('Form is invalid.Please check the');
    }
  }

  updateVisualCardNumber(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;

    if (inputValue !== null) {
      this.visualCardNumber = inputValue
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1-')
        .slice(0, 19);
    }
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(19),
        Validators.pattern(/^\d{4}-\d{4}-\d{4}-\d{4}$/),
      ]),
    });
  }
}
