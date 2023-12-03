import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Employer } from 'src/app/models/users';

@Component({
  selector: 'app-tips-user-details-header',
  templateUrl: './tips-user-details-header.component.html',
  styleUrls: ['./tips-user-details-header.component.scss'],
})
export class TipsUserDetailsHeaderComponent implements OnInit {
  @Input() data!: Employer | null;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data, 'THis Data HEadersdfsdf');
    this.data?.firstName;
  }
}
