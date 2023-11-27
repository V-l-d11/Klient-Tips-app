import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tips-user-conditional-input-sec',
  templateUrl: './tips-user-conditional-input-sec.component.html',
  styleUrls: ['./tips-user-conditional-input-sec.component.scss'],
})
export class TipsUserConditionalInputSecComponent {
  selectedAmount: string | number | null = null;
  inputEl: string = '';
  errorMessage: string | null = null;

  @Output() parentInputValue = new EventEmitter<string>();
  @Output() amountSelected = new EventEmitter<number>();

  selectAmount(amount: number): void {
    this.selectedAmount = amount;
    this.amountSelected.emit(amount);
  }

  inputAmount(): void {
    const inputValue = this.inputEl;
    this.parentInputValue.emit(this.inputEl);
    if (inputValue.length <= 1) {
      this.errorMessage = null;
      this.parentInputValue.emit(this.inputEl);
    } else {
      this.errorMessage =
        'Invalid input value. Please enter a number greater than or equal to $1.';
    }
  }
}
