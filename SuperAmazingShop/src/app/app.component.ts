import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ParamDataService } from './param-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'SuperAmazingShop';
  itemscount = 0;
  constructor(
    public router: Router,
    public location: Location,
    public paramData: ParamDataService
  ) {  }
  // rubric45
  // the user gets back to where they came from
  backClicked() {
    this.location.back();
  }
  ngOnInit() {
    this.itemscount = this.paramData.getItemCount();
  }
  ngOnDestroy() {
    this.paramData.clearCart();
  }
}
