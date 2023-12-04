import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tips-user-add-card-section',
  templateUrl: './tips-user-add-card-section.component.html',
  styleUrls: ['./tips-user-add-card-section.component.scss'],
})
export class TipsUserAddCardSectionComponent implements OnInit {
  @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  myForm!: FormGroup;
  isCliked: boolean = false;

  onSubmit(form: FormGroup) {
    this.isCliked = true;
    if (this.myForm.valid) {
      this.formSubmit.emit(this.myForm);
    } else {
      console.log('Form is invalid.Please check the');
    }
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }
}
