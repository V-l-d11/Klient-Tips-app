import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tips-user-details-values-inputs',
  templateUrl: './tips-user-details-values-inputs.component.html',
  styleUrls: ['./tips-user-details-values-inputs.component.scss'],
})
export class TipsUserDetailsValuesInputsComponent {
  selectedAmount: number | null = null;
  isCliked: boolean | null = null;

  @Output() amountSelected = new EventEmitter<number>();
  @Output() isClik = new EventEmitter<boolean>();

  clickOtherAmount() {
    this.isCliked = !this.isCliked;
    console.log(this.isCliked, 'IS CLIKED');
    this.isClik.emit(this.isCliked);
  }

  selectAmount(amount: number): void {
    this.selectedAmount = amount;
    this.amountSelected.emit(amount);
  }
}
