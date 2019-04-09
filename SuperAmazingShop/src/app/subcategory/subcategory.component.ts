import { Component, OnInit, Injectable, OnChanges } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ICategory } from '../category';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
@Injectable()
export class SubcategoryComponent implements OnInit, OnChanges {
  JsonData: ICategory;
  CatIndex: number;
  SubIndex: number;
  constructor(public data: GetdataService) {
  }

  setCatIndex(catIndex) {
    this.CatIndex = catIndex;
  }
  setSubIndex(subIndex) {
    this.SubIndex = subIndex;
  }
  ngOnInit() {
    this.data.getData().subscribe((value: ICategory) => {
      this.JsonData = value;
      console.log(this.JsonData);
    });

  }
  ngOnChanges() {
  }

}
