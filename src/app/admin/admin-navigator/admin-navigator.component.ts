import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-admin-navigator',
  templateUrl: './admin-navigator.component.html',
  styleUrls: ['./admin-navigator.component.css']
})
export class AdminNavigatorComponent implements OnInit {
  @Input('status') data;
  coinName = "Vig coin" 

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

 ngOnChanges() { 
 
 }

}
