import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employer } from 'src/app/models/users';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tips-users-list',
  templateUrl: './tips-users-list.component.html',
  styleUrls: ['./tips-users-list.component.scss'],
})
export class TipsUsersListComponent {
  @Input() data: Employer[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.data, 'This data');
  }
  linkForUser(el: any) {
    const elId = el.id;
    this.router.navigate(['user', elId]);
  }
}
