import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { DetailComponent } from './detail/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'home/shopping', component: ShoppingPageComponent },
  { path: 'home/shopping/detail/:catID/:subID/:itemID', component: DetailComponent},
  { path: 'home/shopping/cart', component: ShoppingCartComponent},
  { path: 'home/about', component: AboutComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
