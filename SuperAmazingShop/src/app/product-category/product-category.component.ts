import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ICategory } from '../category';
import { ParamDataService } from '../param-data.service';
import { AppComponent } from '../app.component';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit, DoCheck {
  @Input() JsonData: ICategory;
  @Input() CatIndex: number;
  @Input() SubIndex: number;
  oldSubIndex: number;
  InStock: number;
  checked: boolean;
  orderName: string;
  reverse: boolean;
  ItemIndex: number;
  numberShown: number;
  numberTotal: number;
  constructor(public paramData: ParamDataService, public app: AppComponent, public data: GetdataService) {
    this.InStock = -1;
    this.checked = false;
    this.orderName = ' ';
    this.reverse = false;
    this.ItemIndex = 0;
    this.numberTotal = 0;
    this.numberShown = 0;
    this.oldSubIndex = this.SubIndex;
  }
  ngOnInit() {
  }
  ngDoCheck() {
    if (this.oldSubIndex !== this.SubIndex) {
      this.getAvailable();
      this.oldSubIndex = this.SubIndex;
    }
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
    this.getAvailable();
  }
  sendData(itemName: string) {
    this.ItemIndex = 0;
    while (this.JsonData[this.CatIndex].subcategories[this.SubIndex].items[this.ItemIndex].name !== itemName) {
      this.ItemIndex++;
    }
    this.JsonData[this.CatIndex].subcategories[this.SubIndex].items[this.ItemIndex].quantaty = 1;
    this.paramData.storeItems(this.JsonData[this.CatIndex].subcategories[this.SubIndex].items[this.ItemIndex]);
    this.app.itemscount++;
  }
  // rubric28
  // this updates the items shown when it is called
  getAvailable() {
    this.numberShown = 0;
    this.numberTotal = 0;
    const temp = this.JsonData[this.CatIndex].subcategories[this.SubIndex].items;
    for (const item of temp) {
      this.numberTotal++;
      if (item.stock > this.InStock) {
        this.numberShown++;
      }
    }
  }
}
