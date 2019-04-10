import { Component, OnInit } from '@angular/core';
import { ParamDataService } from '../param-data.service';
import { IItems } from '../items';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  Items: IItems[];
  constructor(public paramData: ParamDataService) { }

  ngOnInit() {
    this.Items = this.paramData.getItems();
  }

}
