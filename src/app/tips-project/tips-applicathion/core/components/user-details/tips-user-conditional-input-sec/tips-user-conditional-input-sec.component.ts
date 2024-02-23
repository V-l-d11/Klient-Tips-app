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
    console.log(this.inputEl, 'SF');
    this.parentInputValue.emit(this.inputEl);
    if (!Number(this.inputEl)) {
      this.errorMessage = 'Invalid input value. Please enter a number';
    } else {
      if (Number(this.inputEl) < 2) {
        this.errorMessage =
          'Invalid input value. Please enter a number greater than or equal to $1.';
      } else {
        this.errorMessage = null;
        this.parentInputValue.emit(this.inputEl);
      }
    }
  }
}
