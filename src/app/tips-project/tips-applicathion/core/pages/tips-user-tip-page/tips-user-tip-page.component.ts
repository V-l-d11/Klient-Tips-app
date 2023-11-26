import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TipsPersonsDetailsDataService } from '../../services/tips-persons-details-data/tips-persons-details-data.service';
@Component({
  selector: 'app-tips-user-tip-page',
  templateUrl: './tips-user-tip-page.component.html',
  styleUrls: ['./tips-user-tip-page.component.scss'],
})
export class TipsUserTipPageComponent implements OnInit {
  id?: string | number;
  private subscription!: Subscription;
  item: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private loadUserInfo: TipsPersonsDetailsDataService
  ) {
    this.subscription = activateRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.item = this.loadUserInfo.loadUserElement(Number(this.id));
  }
}
