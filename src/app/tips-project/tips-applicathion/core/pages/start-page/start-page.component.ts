import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  handleClicktoStart() {
    this.router.navigate(['restaurants']);
  }

  ngOnInit(): void {}
}
