import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $: any;


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})

export class GetStartedComponent implements OnInit {
  status;
  config;
  ports;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.config = this.dataService.config;
    this.dataService.get(this.dataService.config.api + '/stats').subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.ports = this.status.config.ports;
      }
    });
  }
}
