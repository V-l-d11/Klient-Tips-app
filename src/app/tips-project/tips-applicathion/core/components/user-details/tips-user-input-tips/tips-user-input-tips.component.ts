import { Component, OnInit } from '@angular/core';
import { TipsTransactionsDataService } from '../../../services/tips-transactions-data/tips-transactions-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tips-user-input-tips',
  templateUrl: './tips-user-input-tips.component.html',
  styleUrls: ['./tips-user-input-tips.component.scss'],
})
export class TipsUserInputTipsComponent implements OnInit {
  isChecked = false;
  subscription!: Subscription;
  tip: number | null = null;

  constructor(private tipService: TipsTransactionsDataService) {}

  toggleCheckbox(): void {
    this.isChecked = !this.isChecked;
  }

  ngOnInit(): void {
    this.subscription = this.tipService
      .getChangeBoxInput()
      .subscribe((data) => {
        this.tip = data.amount;
      });
  }
}
