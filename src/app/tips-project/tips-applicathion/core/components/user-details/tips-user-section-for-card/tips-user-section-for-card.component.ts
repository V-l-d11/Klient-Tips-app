import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TipsPersonsDetailsDataService } from '../../../services/tips-persons-details-data/tips-persons-details-data.service';

@Component({
  selector: 'app-tips-user-section-for-card',
  templateUrl: './tips-user-section-for-card.component.html',
  styleUrls: ['./tips-user-section-for-card.component.scss'],
})
export class TipsUserSectionForCardComponent implements OnInit {
  @Input() formData!: FormGroup;
  @Output() payWithCardClick: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  constructor(private loadUser: TipsPersonsDetailsDataService) {
    console.log(this.formData, 'Form Data');
  }

  ngOnInit(): void {}

  handlePayWithCard(val: boolean) {
    this.payWithCardClick.emit(val);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData']) {
      const changedValue = changes['formData'].currentValue;
      console.log(
        'Received Form Data in TipsUserSectionForCardComponent',
        changedValue?.value
      );
    }
  }
}
