import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { DetailComponent } from './detail/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // rubric13
  // also here is the path home, here is no # allowed
  { path: 'home', component: HomePageComponent },
  // rubric34
  // here is the home/shopping route
  { path: 'home/shopping', component: ShoppingPageComponent },
  // rubric46
  // the product page here labled "detail"
  { path: 'home/shopping/detail/:catID/:subID/:itemID', component: DetailComponent},
  // rubric56
  // the cart page is accessible at home/cart
  { path: 'home/cart', component: ShoppingCartComponent},
   // rubric64
  // the about page is accessible at home/about
  { path: 'home/about', component: AboutComponent},
  // rubric62
  // the contact page is accessible at home/contact
  { path: 'home/contact', component: ContactComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
