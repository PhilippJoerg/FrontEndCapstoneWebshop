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
  constructor() {
  }
  ngOnInit() {
  }

}
