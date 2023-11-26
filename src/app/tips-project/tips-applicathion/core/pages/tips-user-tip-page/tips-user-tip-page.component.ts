import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TipsPersonsDetailsDataService } from '../../services/tips-persons-details-data/tips-persons-details-data.service';
@Component({
  selector: 'app-tips-user-tip-page',
  templateUrl: './tips-user-tip-page.component.html',
  styleUrls: ['./tips-user-tip-page.component.scss'],
})
export class TipsUserTipPageComponent implements OnInit, OnDestroy {
  id?: string | number;
  private subscription!: Subscription;
  item: any;
  selectedAmount: number | null = null;
  tip: number | null = null;
  parentInputValue: string = '';
  isClik: boolean | null = null;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private loadUserInfo: TipsPersonsDetailsDataService
  ) {
    this.subscription = activateRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
  handleAmountSelected(amount: number): void {
    this.selectedAmount = amount;
    if (this.id != null) {
      this.loadUserInfo.updateTip(Number(this.id), amount);
    }
  }
  handleInputElChanged(event: string): void {
    const val = Number(event.replace(/[^0-9]/g, ''));

    this.loadUserInfo.updateTip(Number(this.id), val);
  }

  handleIsClik(target: boolean): void {
    console.log(target, 'TRAGET');
    this.isClik = target;
  }

  isNumber(value: string): boolean {
    return !isNaN(Number(value));
  }
  ngOnInit(): void {
    this.item = this.loadUserInfo.loadUserElement(Number(this.id));
    this.loadUserInfo.tip$.subscribe((tip) => {
      this.tip = tip;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}