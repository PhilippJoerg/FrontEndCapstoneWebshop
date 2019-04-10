import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from '../category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  @Input() CatIndex: number;
  @Input() SubIndex: number;
  @Input() JsonData: ICategory;
  InStock: number;
  checked: boolean;
  orderName: string;
  reverse: boolean;
  constructor() {
    this.InStock = -1;
    this.checked = false;
    this.orderName = ' ';
    this.reverse = false;
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

}
