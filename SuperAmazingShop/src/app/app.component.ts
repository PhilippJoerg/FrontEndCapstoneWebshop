import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ParamDataService } from './param-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'SuperAmazingShop';
  itemscount = 0;
  constructor(
    public router: Router,
    public location: Location,
    public paramData: ParamDataService
  ) { this.getItemCount(); }
  getItemCount() {
    this.itemscount = this.paramData.getItemCount();
  }
  backClicked() {
    this.location.back();
  }
  ngOnDestroy() {
    this.paramData.clearCart();
  }
}
