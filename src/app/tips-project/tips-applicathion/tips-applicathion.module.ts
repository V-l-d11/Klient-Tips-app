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
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {
  HttpClient,
  HttpClientModule,
  HttpClientJsonpModule,
} from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { TipsUserTipPageComponent } from './core/pages/tips-user-tip-page/tips-user-tip-page.component';
import { TipsPrevPageComponent } from './core/pages/tips-prev-page/tips-prev-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TipsUserDetailsHeaderComponent } from './core/components/user-details/tips-user-details-header/tips-user-details-header.component';
import { TipsUserDetailsValuesInputsComponent } from './core/components/user-details/tips-user-details-values-inputs/tips-user-details-values-inputs.component';
import { TipsUserInputTipsComponent } from './core/components/user-details/tips-user-input-tips/tips-user-input-tips.component';
import { TipsUserBtnSectionComponent } from './core/components/user-details/tips-user-btn-section/tips-user-btn-section.component';
import { TipsUserConditionalInputSecComponent } from './core/components/user-details/tips-user-conditional-input-sec/tips-user-conditional-input-sec.component';
import { TipsUserAddCardSectionComponent } from './core/components/user-details/tips-user-add-card-section/tips-user-add-card-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TipsBankCardIntrfaceComponent } from './core/components/user-details/tips-bank-card-intrface/tips-bank-card-intrface.component';
import { TipsUserSectionForCardComponent } from './core/components/user-details/tips-user-section-for-card/tips-user-section-for-card.component';
import { TipsFirstPageRestaurantsListComponent } from './core/pages/tips-first-page-restaurants-list/tips-first-page-restaurants-list.component';
import { StartPageComponent } from './core/pages/start-page/start-page.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    TipsMainPageComponent,
    TipsNavbarComponent,
    TipsSearchSectionComponent,
    TipsUsersListComponent,
    TipsFooterComponent,
    TipsUserTipPageComponent,
    TipsPrevPageComponent,
    TipsUserDetailsHeaderComponent,
    TipsUserDetailsValuesInputsComponent,
    TipsUserInputTipsComponent,
    TipsUserBtnSectionComponent,
    TipsUserConditionalInputSecComponent,
    TipsUserAddCardSectionComponent,
    TipsBankCardIntrfaceComponent,
    TipsUserSectionForCardComponent,
    TipsFirstPageRestaurantsListComponent,
    StartPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  exports: [
    TipsMainPageComponent,
    TipsFooterComponent,
    TipsUsersListComponent,
    TipsPrevPageComponent,
    TipsPrevPageComponent,
    TipsFirstPageRestaurantsListComponent,
    TipsNavbarComponent,
  ],
})
export class TipsApplicationModule {}
