import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsMainPageComponent } from './core/pages/tips-main-page/tips-main-page.component';
import { TipsNavbarComponent } from './core/components/tips-navbar/tips-navbar.component';
import { TipsSearchSectionComponent } from './core/components/tips-search-section/tips-search-section.component';
import { TipsUsersListComponent } from './core/components/tips-users-list/tips-users-list.component';
import { TipsFooterComponent } from './core/components/tips-footer/tips-footer.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    TipsMainPageComponent,
    TipsNavbarComponent,
    TipsSearchSectionComponent,
    TipsUsersListComponent,
    TipsFooterComponent,
  ],
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule],
  exports: [TipsMainPageComponent],
})
export class TipsApplicathionModule {}
