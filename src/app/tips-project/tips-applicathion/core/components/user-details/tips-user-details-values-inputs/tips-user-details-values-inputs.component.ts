import { Component } from '@angular/core';

@Component({
  selector: 'app-tips-user-details-values-inputs',
  templateUrl: './tips-user-details-values-inputs.component.html',
  styleUrls: ['./tips-user-details-values-inputs.component.scss'],
})
export class TipsUserDetailsValuesInputsComponent {
  selectedAmount: number | null = null;

  selectAmount(amount: number): void {
    this.selectedAmount = amount;
    console.log(amount);
  }
}
