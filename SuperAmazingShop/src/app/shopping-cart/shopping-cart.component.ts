import { Component, OnInit } from '@angular/core';
import { ParamDataService } from '../param-data.service';
import { IItems } from '../items';
import { AppComponent } from '../app.component';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  Items: IItems[] = [];
  prices: number[] = [];
  total: number;
  constructor(public paramData: ParamDataService, public app: AppComponent) { }

  ngOnInit() {
    this.Items = this.paramData.getItems();
    this.getTotal();
  }
  delItems(index: number) {
    this.paramData.delItems(index);
    this.Items = this.paramData.getItems();
    this.app.itemscount--;
    this.getTotal();
  }
  delAll() {
    this.paramData.clearCart();
    this.app.itemscount = 0;
    this.Items = [];
    this.getTotal();
  }
  getTotal() {
    let i = 0;
    this.total = 0;
    const temp: any = this.Items;
    if (this.Items) {
      if (this.Items.length === undefined) {
        this.total = temp.price;
      } else {
        for (const item of this.Items) {
          this.prices[i] = item.price;
          this.total += item.price;
          i++;
        }
      }
    }
  }
}
