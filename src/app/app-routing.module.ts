import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipsMainPageComponent } from './tips-project/tips-applicathion/core/pages/tips-main-page/tips-main-page.component';

const routes: Routes = [{ path: '', component: TipsMainPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
