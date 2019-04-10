import { Injectable } from '@angular/core';
import { IItems } from './items';

@Injectable({
  providedIn: 'root'
})
export class ParamDataService {
  Items: IItems[];
  constructor() {
    this.Items = [];
  }
  storeItems(item: IItems) {
    this.Items.push(item);
  }
  getItems() {
    return this.Items;
  }
}
