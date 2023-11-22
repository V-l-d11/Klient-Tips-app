import { Component, OnInit } from '@angular/core';
import { TipsPersonsDetailsDataService } from '../../services/tips-persons-details-data/tips-persons-details-data.service';
import { Employer } from 'src/app/models/users';
@Component({
  selector: 'app-tips-main-page',
  templateUrl: './tips-main-page.component.html',
  styleUrls: [
    './tips-main-page.component.scss',
    './tips-main-page-mobile.component.scss',
  ],
})
export class TipsMainPageComponent implements OnInit {
  dataList!: Employer[];
  constructor(private dataServiceUsers: TipsPersonsDetailsDataService) {}

  ngOnInit(): void {
    this.dataList = this.dataServiceUsers.getAllData();
  }
}
