import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tips-prev-page',
  templateUrl: './tips-prev-page.component.html',
  styleUrls: ['./tips-prev-page.component.scss'],
})
export class TipsPrevPageComponent implements OnInit {
  isPaymentError: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    const paymentStatusParam = this.route.snapshot.queryParams['paymentStatus'];
    this.isPaymentError = paymentStatusParam === 'true';
  }

  handleClicktoBack() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
