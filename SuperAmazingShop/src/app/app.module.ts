import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ShoppingPageComponent],
  imports: [BrowserModule, NgbModule , AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
