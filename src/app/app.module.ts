import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TipsApplicathionModule } from './tips-project/tips-applicathion/tips-applicathion.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TipsApplicathionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
