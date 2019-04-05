import { Component, Injectable, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { GetData } from '../getdata';


@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.scss']
})
@Injectable()
export class ShoppingPageComponent implements OnInit {
  test: GetData[];

  constructor(public data: GetdataService) {}
  ngOnInit() {
    this.data.getData().subscribe((value: GetData[]) => {
      for (let c of value) {
        let int1 = 0;
        this.test[int1].category = c.category;
        for (let s of value) {
          let int2 = 0;
          this.test[int1].subcategories[int2].name = s.subcategories[int2].name;
          for (let i of value) {
            let int3 = 0;
            this.test[int1].subcategories[int2].items[int3].name =
              i.subcategories[int2].items[int3].name;
            this.test[int1].subcategories[int2].items[int3].description =
              i.subcategories[int2].items[int3].description;
            this.test[int1].subcategories[int2].items[int3].price =
              i.subcategories[int2].items[int3].price;
            this.test[int1].subcategories[int2].items[int3].imagelink =
              i.subcategories[int2].items[int3].imagelink;
            this.test[int1].subcategories[int2].items[int3].rating =
              i.subcategories[int2].items[int3].rating;
            this.test[int1].subcategories[int2].items[int3].stock =
              i.subcategories[int2].items[int3].stock;
            this.test[int1].subcategories[int2].items[int3].category =
              i.subcategories[int2].items[int3].category;
            this.test[int1].subcategories[int2].items[int3].subcategory =
              i.subcategories[int2].items[int3].subcategory;
            int3++;
          }
          int2++;
        }
        int1++;
      }

      console.log(this.test);
    });
  }
}
