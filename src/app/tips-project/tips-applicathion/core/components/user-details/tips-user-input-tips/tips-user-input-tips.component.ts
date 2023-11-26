import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tips-user-input-tips',
  templateUrl: './tips-user-input-tips.component.html',
  styleUrls: ['./tips-user-input-tips.component.scss'],
})
export class TipsUserInputTipsComponent {
  isChecked = false;
  @Input() tip: number | null = null;

  toggleCheckbox(): void {
    this.isChecked = !this.isChecked;
  }
}
