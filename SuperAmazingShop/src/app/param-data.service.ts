import { Injectable, } from '@angular/core';
import { IItems } from './Items';


@Injectable({
  providedIn: 'root'
})
export class ParamDataService {
  total = 0;
  Items: IItems[] = [];
  constructor() {
  }
  storeData(Items: any) {
    this.clearCart();
    localStorage.setItem('cart', JSON.stringify(Items));
  }
  storeItems(item: IItems) {
    this.Items = [];
    if (localStorage.getItem('cart') == null) {
      localStorage.setItem('cart', JSON.stringify(item));
    } else {
      const cart: any = JSON.parse(localStorage.getItem('cart'));
      if (cart.length === undefined) {
        this.Items.push(cart);
      } else {
        for (const temp of cart) {
          this.Items.push(temp);
        }
      }
      this.Items.push(item);
      localStorage.setItem('cart', JSON.stringify(this.Items));
    }
  }
  delItems(index: number) {
    const cart: any = JSON.parse(localStorage.getItem('cart'));
    const temp: any[] = [];
    for (let i = 0; i < cart.length; i++) {
      if (i !== index) {
        temp.push(cart[i]);
      }
    }
    localStorage.setItem('cart', JSON.stringify(temp));
  }
  getItems() {
    return JSON.parse(localStorage.getItem('cart'));
  }
  getItemCount() {
    let temp: any;
    let num = 0;
    temp = JSON.parse(localStorage.getItem('cart'));
    if (temp !== null) {
      if (temp.length !== undefined) {
        for (const item of temp) {
          if (item.quantaty !== undefined) {
            num = num + +item.quantaty;
          } else {
            item.quantaty = 1;
            num = num + 1;
          }
        }
      } else {
        num = temp.quantaty;
      }
    } else {
      num = 0;
    }
    return num;
  }
  clearCart() {
    localStorage.clear();
  }
}
