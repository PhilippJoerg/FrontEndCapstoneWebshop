import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ShoppingPageComponent, SubcategoryComponent, DetailComponent],
  imports: [BrowserModule, NgbModule , AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
