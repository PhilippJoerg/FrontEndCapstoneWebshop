import { Component, OnInit } from '@angular/core';
import { ICategory } from '../category';
import { GetdataService } from '../getdata.service';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  rndCat: number[];
  rndSub: number[];
  rndItem: number[];
  Pictures: string[];
  Names: string[];
  JSONData: ICategory;
  constructor(public data: GetdataService) {
    this.rndCat = [];
    this.rndSub = [];
    this.rndItem = [];
    this.Pictures = [];
    this.Names = [];
  }
  ngOnInit() {
    this.data.getData().subscribe((value: ICategory) => {
      this.JSONData = value;
      this.getItemData();
    });
    $('.carousel').carousel({ interval: 3000 });

    // rubric10
    // if the user toggles the toggleslide checkbox the slideshow pauses or cycles
    const $toggle = $('#toggleslide');
    $toggle.bind('click', () => {
      if ($toggle.hasClass('pause')) {
        $('.carousel').carousel('cycle');
        $toggle.removeClass('pause');
      } else {
        $('.carousel').carousel('pause');
        $toggle.addClass('pause');
      }
    });
  }
  getItemData() {
    for (let i = 0; i < 4; i++) {
      this.rndCat[i] = Math.floor((Math.random() * 4));
      do {
        this.rndSub[i] = Math.floor((Math.random() * this.JSONData[this.rndCat[i]].subcategories.length));
      } while (this.rndCat[i] === 0 && this.rndSub[i] === 2);
      this.rndItem[i] = Math.floor((Math.random() * this.JSONData[this.rndCat[i]].subcategories[this.rndSub[i]].items.length));
      this.Pictures[i] = this.JSONData[this.rndCat[i]].subcategories[this.rndSub[i]].items[this.rndItem[i]].imagelink;
      this.Names[i] = this.JSONData[this.rndCat[i]].subcategories[this.rndSub[i]].items[this.rndItem[i]].name;
    }
  }
}
