import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { DataService } from './data.service';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '田一块 VIG 矿池';
  status
  public constructor(private titleService: Title, private meta: Meta, private dataService: DataService) {
    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'keywords', content: 'VIG,矿池,BITCOIN,比特币' });
  }

  ngOnInit() {

    // Initial Get status
    this.dataService.get(this.dataService.config.api + '/stats').subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        // this.updateStatus();
      }
    });
  }

  // updateStatus() {
  //   this.status.network.hashrate = this.status.network.difficulty / this.status.config.coinDifficultyTarget;
  //   this.status.network.hashrateReadable = this.dataService.hashRateWithUnit(this.status.network.difficulty / this.status.config.coinDifficultyTarget);
  //   this.status.network.lastBlockTime = this.dataService.timeAgo(this.status.network.timestamp);
  //   this.status.network.lastReward = this.dataService.getReadableCoins(this.status, this.status.network.reward, 4);
  //   this.status.network.lastHashExplorerUrl = this.dataService.hashToUrl(this.status, this.status.network.hash);
  //   this.status.pool.hashrateReadable = this.dataService.hashRateWithUnit(this.status.pool.hashrate);
  //   this.status.pool.lastBlockTime = this.dataService.timeAgo(this.status.pool.lastBlockFound / 1000);
  //   this.status.pool.blockTime = this.dataService.getReadableTime(this.status.network.difficulty / this.status.pool.hashrate);
  // }

}
