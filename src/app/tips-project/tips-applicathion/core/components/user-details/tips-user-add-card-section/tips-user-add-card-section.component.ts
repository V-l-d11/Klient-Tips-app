import { Component, OnInit } from '@angular/core';
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
  myForm!: FormGroup;
  isCliked: boolean = false;

  onSubmit(form: FormGroup) {
    this.isCliked = true;
    if (this.myForm.valid) {
      console.log('form', form.value.period);
    } else {
      console.log('Form is invalid.Please check the');
    }
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
    });
  }
}
