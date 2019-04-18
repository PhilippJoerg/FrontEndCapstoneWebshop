import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from '../category';
import { ParamDataService } from '../param-data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  @Input() CatIndex: number;
  @Input() SubIndex: number;
  @Input() JSONData: ICategory;
  InStock: number;
  checked: boolean;
  orderName: string;
  reverse: boolean;
  ItemIndex: number;
  constructor(public paramData: ParamDataService, public app: AppComponent) {
    this.InStock = -1;
    this.checked = false;
    this.orderName = ' ';
    this.reverse = false;
    this.ItemIndex = 0;
  }
  ngOnInit() {
  }
  order(name: string, reversed: boolean) {
    this.orderName = name;
    this.reverse = reversed;
  }
  btnToggle() {
    if (this.checked) {
      this.InStock = -1;
      this.checked = false;
    } else {
      this.InStock = 0;
      this.checked = true;
    }
  }
  sendData(itemName: string) {
    this.ItemIndex = 0;
    while (this.JSONData[this.CatIndex].subcategories[this.SubIndex].items[this.ItemIndex].name !== itemName) {
      this.ItemIndex++;
    }
    this.JSONData[this.CatIndex].subcategories[this.SubIndex].items[this.ItemIndex].quantaty = 1;
    this.paramData.storeItems(this.JSONData[this.CatIndex].subcategories[this.SubIndex].items[this.ItemIndex]);
    this.app.itemscount++;
  }
}
