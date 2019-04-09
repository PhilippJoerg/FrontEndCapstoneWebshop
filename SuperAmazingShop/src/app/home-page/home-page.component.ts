import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    $('.carousel').carousel({interval: 3000});

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
}
