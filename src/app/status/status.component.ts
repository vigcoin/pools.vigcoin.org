import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input('status') data : {};
  constructor() {

   }

  ngOnInit() {
    console.log("inside status");
    console.log(this.data);
  }

}
