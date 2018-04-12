import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  config
  status

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.config = this.dataService.config;

    this.dataService.get(this.dataService.config.api + '/stats').subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
      }
    });
  }

}
