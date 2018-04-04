import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  @Input('status') data;
  coinName
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log("inside status");
    console.log(this.data);
  }

  ngOnChanges() {
    console.log("inside status change");
    console.log(this.data);
    if (this.data && this.data.config.coin) {
      this.coinName = this.data.config.coin
      console.log("inside coinName");
      this.cdr.detectChanges();
      var updates = $('#stats_updated');
      updates.css('transition', 'opacity 100ms ease-out');
      updates.css('opacity', 1);

      setTimeout(function () {
        updates.css('transition', 'opacity 7000ms linear');
        updates.css('opacity', 0);
      }, 500);

    }
  }

}
