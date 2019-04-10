import { Component, Injectable, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ICategory } from '../category';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.scss']
})
@Injectable()
export class ShoppingPageComponent implements OnInit {
  JSONData: ICategory;
  category: string;
  catIndex: number;
  subcategorie: string;
  subIndex: number;
  constructor(public data: GetdataService) {
    this.category = null;
    this.subcategorie = null;
  }
  ngOnInit() {
    this.data.getData().subscribe((value: ICategory) => {
      this.JSONData = value;
    });
  }
  setCat(value: string, index: number) {
    this.category = value;
    this.subcategorie = null;
    this.catIndex = index;
  }
  setSubCat(value: string, index: number) {
    this.subcategorie = value;
    this.category = null;
    this.subIndex = index;
  }
}
