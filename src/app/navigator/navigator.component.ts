import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

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
    }
  }

}
