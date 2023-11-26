import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tips-user-conditional-input-sec',
  templateUrl: './tips-user-conditional-input-sec.component.html',
  styleUrls: ['./tips-user-conditional-input-sec.component.scss'],
})
export class TipsUserConditionalInputSecComponent {
  selectedAmount: string | number | null = null;
  inputEl: string = '';

  @Output() parentInputValue = new EventEmitter<string>();
  @Output() amountSelected = new EventEmitter<number>();

  selectAmount(amount: number): void {
    this.selectedAmount = amount;
    this.amountSelected.emit(amount);
  }

  inputAmount(): void {
    console.log(this.inputEl, 'This INPUT element');
    this.parentInputValue.emit(this.inputEl);
  }
}
