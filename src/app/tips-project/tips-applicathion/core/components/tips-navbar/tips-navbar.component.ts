import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tips-navbar',
  templateUrl: './tips-navbar.component.html',
  styleUrls: [
    './tips-navbar.component.scss',
    './tips-navbar-mobile.component.scss',
  ],
})
export class TipsNavbarComponent {

constructor(private route: ActivatedRoute, private router: Router) {
}

handleHomePage() {
  this.router.navigate(['restaurants']);
}

ngOnInit(): void {}
}