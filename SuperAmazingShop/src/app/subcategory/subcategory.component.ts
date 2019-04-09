import { Component, OnInit, OnChanges, Injectable, Input } from '@angular/core';
import { ICategory } from '../category';

@Component({
  selector: 'app-subcategory',
  // templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
  template: '<div class="row"><div class="col-3 m-4 p-5 card" *ngFor="let test of JsonData[CatIndex].subcategories">{{test.name}}</div></div>'
})
@Injectable()
export class SubcategoryComponent implements OnInit, OnChanges {
  @Input() CatIndex: number;
  @Input() SubIndex: number;
  @Input() JsonData: ICategory;
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges() {
  }
}
