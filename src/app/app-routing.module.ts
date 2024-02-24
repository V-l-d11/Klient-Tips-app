import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipsMainPageComponent } from './tips-project/tips-applicathion/core/pages/tips-main-page/tips-main-page.component';
import { TipsPrevPageComponent } from './tips-project/tips-applicathion/core/pages/tips-prev-page/tips-prev-page.component';
import { TipsUserTipPageComponent } from './tips-project/tips-applicathion/core/pages/tips-user-tip-page/tips-user-tip-page.component';
import { TipsFirstPageRestaurantsListComponent } from './tips-project/tips-applicathion/core/pages/tips-first-page-restaurants-list/tips-first-page-restaurants-list.component';
import { StartPageComponent } from './tips-project/tips-applicathion/core/pages/start-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '', component: StartPageComponent },
  { path: 'restaurants', component: TipsFirstPageRestaurantsListComponent },
  { path: 'restaurant/:id', component: TipsMainPageComponent },
  { path: 'user-list', component: TipsMainPageComponent },
  { path: 'user/:id', component: TipsUserTipPageComponent },
  { path: 'paymentStatus', component: TipsPrevPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
