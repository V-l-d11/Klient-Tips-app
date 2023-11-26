import { Component, Input, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/users';

@Component({
  selector: 'app-tips-user-details-header',
  templateUrl: './tips-user-details-header.component.html',
  styleUrls: ['./tips-user-details-header.component.scss'],
})
export class TipsUserDetailsHeaderComponent implements OnInit {
  @Input() data!: Employer;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data, 'THis Data HEader');
  }
}
