import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  config;
  status;

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.config = this.dataService.config;

    this.dataService.getStatus().subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.status.networkHashrate = this.dataService.getReadableHashRateString(
        this.status.network.difficulty / this.status.config.coinDifficultyTarget) + ' / 秒';
      }
    });
  }

}
