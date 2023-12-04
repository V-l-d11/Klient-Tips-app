import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employer } from 'src/app/models/users';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tips-users-list',
  templateUrl: './tips-users-list.component.html',
  styleUrls: ['./tips-users-list.component.scss'],
})
export class TipsUsersListComponent implements OnInit {
  @Input() data: Employer[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}
  linkForUser(el: any) {
    const elId = el.id;
    this.router.navigate(['user', elId]);
  }

  ngOnInit(): void {}
}
