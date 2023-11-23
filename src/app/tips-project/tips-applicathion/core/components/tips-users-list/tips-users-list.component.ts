import { Component, Input } from '@angular/core';
import { Employer } from 'src/app/models/users';

@Component({
  selector: 'app-tips-users-list',
  templateUrl: './tips-users-list.component.html',
  styleUrls: ['./tips-users-list.component.scss'],
})
export class TipsUsersListComponent {
  @Input() data: Employer[] = [];

  constructor() {
    console.log(this.data, 'This data');
  }
}
