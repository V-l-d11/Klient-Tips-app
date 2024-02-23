import { Component, OnInit, OnDestroy } from '@angular/core';
import { TipsPersonsDetailsDataService } from '../../services/tips-persons-details-data/tips-persons-details-data.service';
import {
  Employer,
  ServerEmployee,
  mapServeToClient,
} from 'src/app/models/users';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TipsTransactionsDataService } from '../../services/tips-transactions-data/tips-transactions-data.service';
@Component({
  selector: 'app-tips-main-page',
  templateUrl: './tips-main-page.component.html',
  styleUrls: [
    './tips-main-page.component.scss',
    './tips-main-page-mobile.component.scss',
  ],
})
export class TipsMainPageComponent implements OnInit, OnDestroy {
  dataList!: Employer[];
  filterDataList!: Employer[];
  allPost!: Employer;
  id!: number;
  public responseData: Employer[] = [];
  private dataSubscription!: Subscription;

  constructor(
    private dataServiceUsers: TipsPersonsDetailsDataService,
    private activateRouter: ActivatedRoute,
    private tipService: TipsTransactionsDataService
  ) {
    activateRouter.params.subscribe((params) => {
      this.id = params['id'];
      this.tipService.setTipData({ restaurant_id: params['id'] });
    });
  }

  ngOnInit(): void {
    this.dataSubscription = this.dataServiceUsers.DateFromServer$.subscribe(
      (data) => {
        this.responseData = data;
        this.filterDataList = data;
        console.log('This RESPONSE DATA', this.responseData);
      }
    );

    this.dataServiceUsers.getData(this.id).subscribe(
      () => {},
      (error) => {}
    );
  }

  public onSearch(searchTerms: string): void {
    if (!searchTerms.trim()) {
      this.filterDataList = this.responseData;
      console.log(this.filterDataList, 'LALLAL');
    } else {
      this.dataServiceUsers.searchUser(searchTerms).subscribe(
        (filteredData) => {
          console.log(filteredData, 'DADADA');
          this.filterDataList = filteredData;
        },
        (error) => {
          console.error('Error occurred during search', error);
        }
      );
    }
  }

  ngOnDestroy(): void {}
}
