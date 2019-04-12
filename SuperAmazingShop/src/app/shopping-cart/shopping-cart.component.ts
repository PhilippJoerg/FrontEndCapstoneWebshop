import { Component, OnInit } from '@angular/core';
import { ParamDataService } from '../param-data.service';
import { IItems } from '../items';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  Items: IItems[] = [];
  total: number;
  constructor(public paramData: ParamDataService, public app: AppComponent, public common: CommonModule) { }

  ngOnInit() {
    this.Items = this.paramData.getItems();
    this.getTotal();
    this.chainItems();
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
    for (const item of this.Items) {
      if (item.quantaty !== undefined) {
        item.totalPrice = item.price * item.quantaty;
      } else {
        item.totalPrice = item.price;
        item.quantaty = 1;
      }
    }
    let i = 0;
    this.total = 0;
    const temp: any = this.Items;
    if (this.Items) {
      if (this.Items.length === undefined) {
        this.total = temp.price * temp.quantaty;
      } else {
        for (const item of this.Items) {
          this.total += item.price * item.quantaty;
          Math.round(this.total);
          i++;
        }
      }
    }
  }
  chainItems() {
    for (let i = 0; i < this.Items.length; i++) {
      for (let j = 0; j < this.Items.length; j++) {
        if (i !== j) {
          if (this.Items[i].name === this.Items[j].name) {
            this.Items[i].quantaty += this.Items[j].quantaty;
            this.Items.splice(j, 1);
            i = 0;
          }
        }
      }
    }
    this.getTotal();
  }
}
