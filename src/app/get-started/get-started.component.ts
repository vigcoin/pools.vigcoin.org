import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $: any;


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})

export class GetStartedComponent implements OnInit {
  status?;
  config?;
  ports?;
  host?;
  port?;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.config = this.dataService.config;

    const pool = this.dataService.getCurrentPool();
    this.host = pool[2].pool.host;
    this.dataService.getStatus().subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.ports = this.status.config.ports;
        const index = Math.floor(Math.random() * 100) % 3;
        this.port = this.ports[index].port;
      }
    });
  }
}
