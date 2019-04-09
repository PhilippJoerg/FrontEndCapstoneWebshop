import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ICategory } from '../category';
import { ShoppingPageComponent } from '../shopping-page/shopping-page.component';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
@Injectable()
export class SubcategoryComponent implements OnInit {
  @Input() CatIndex: number;
  @Input() SubIndex: number;
  @Input() JsonData: ICategory;
  constructor(public shop: ShoppingPageComponent) {
  }
  subClick(value: string, index: number) {
    this.shop.setSubCat(value, index);
  }
  ngOnInit() {
  }
}
