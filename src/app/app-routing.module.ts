import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipsMainPageComponent } from './tips-project/tips-applicathion/core/pages/tips-main-page/tips-main-page.component';
import { TipsUserTipPageComponent } from './tips-project/tips-applicathion/core/pages/tips-user-tip-page/tips-user-tip-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
  },
  { path: 'user-list', component: TipsMainPageComponent },
  { path: 'user/:id', component: TipsUserTipPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
