import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsMainPageComponent } from './core/pages/tips-main-page/tips-main-page.component';
import { TipsNavbarComponent } from './core/components/tips-navbar/tips-navbar.component';

@NgModule({
  declarations: [TipsMainPageComponent, TipsNavbarComponent],
  imports: [CommonModule],
  exports: [TipsMainPageComponent],
})
export class TipsApplicathionModule {}
