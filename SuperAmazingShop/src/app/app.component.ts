import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SuperAmazingShop';
  constructor(
    public router: Router,
    public location: Location,
  ) {
  }
  backClicked() {
    this.location.back();
  }
  ngOnInit() {
  }
}
