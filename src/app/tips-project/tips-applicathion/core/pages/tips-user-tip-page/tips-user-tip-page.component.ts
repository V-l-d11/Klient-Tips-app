import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TipsPersonsDetailsDataService } from '../../services/tips-persons-details-data/tips-persons-details-data.service';
import { Employer } from 'src/app/models/users';
import { FormGroup } from '@angular/forms';
import { TipsTransactionsDataService } from '../../services/tips-transactions-data/tips-transactions-data.service';
@Component({
  selector: 'app-tips-user-tip-page',
  templateUrl: './tips-user-tip-page.component.html',
  styleUrls: ['./tips-user-tip-page.component.scss'],
})
export class TipsUserTipPageComponent implements OnInit, OnDestroy {
  id?: string | number;
  private subscription!: Subscription;
  item: Employer | undefined;
  selectedAmount: number | null = null;
  tip: number | null = null;
  parentInputValue: string = '';
  isClik: boolean | null = null;
  item$: Observable<Employer | null> = new Observable<Employer | null>();
  formData!: FormGroup;
  requestData: any = {};
  paymentError: boolean = false;
  submitDisabled: boolean = false;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private loadUserInfo: TipsPersonsDetailsDataService,
    private tipService: TipsTransactionsDataService
  ) {
    this.subscription = activateRouter.params.subscribe((params) => {
      this.id = params['id'];
      this.tipService.setTipData({ employee_id: params['id'] });
    });
  }

  handlePayWithCardClick(val: boolean) {
    this.tipService.payTip().subscribe(
      (response) => {
        console.log(response, 'Response');
        const responseStatus: boolean = true;
        this.router.navigate(['paymentStatus'], {
          queryParams: { paymentStatus: responseStatus },
        });
      },
      (error) => {
        console.error('Subscription Error', error);
        const responsStatus: boolean = false;
        this.paymentError = true;
        this.submitDisabled = true;
        this.router.navigate(['paymentStatus'], {
          queryParams: { paymentStatus: responsStatus },
        });
      }
    );
  }

  handleFormSubmitCard(form: FormGroup) {
    let str = form.value.cardNumber;
    let newStr = str.replace(/-/g, '');
    this.tipService.setTipData({ card_number: newStr });
    this.tipService.setTipData({ payment_method: 'card' });
  }

  handleAmountSelected(amount: number): void {
    this.selectedAmount = amount;
    this.tipService.setChangeBox({ amount: amount });
    this.tipService.setTipData({ amount: amount });
    this.tipService.setTipData({ currency: 'pln' });
  }
  handleInputElChanged(event: string): void {
    const val = Number(event.replace(/[^0-9]/g, ''));
    this.requestData.amount = val;
    this.tipService.setChangeBox({ amount: val });
    this.tipService.setTipData({ amount: val });
    this.tipService.setTipData({ currency: 'pln' });
  }

  handleIsClik(target: boolean): void {
    this.isClik = target;
  }

  isNumber(value: string): boolean {
    return !isNaN(Number(value));
  }
  ngOnInit(): void {
    this.item$ = this.loadUserInfo.loadUserElement(Number(this.id));
    this.loadUserInfo.tip$.subscribe((tip) => {
      this.tip = tip;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
