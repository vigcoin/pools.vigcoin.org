import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = '田一块 VIG 矿池';
  status?;
  public constructor(private dataService: DataService) {
  }

  ngOnInit() {

    // Initial Get status
    this.dataService.getStatus().subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.updateStatus();
      }
    });

    // Periodical Get status
    interval(this.dataService.config.interval || 10000).subscribe((v) => {
      this.dataService.getLiveStatus().subscribe(data => {
        if (Object.keys(data).length > 0) {
          this.status = data;
          this.updateStatus();

        }
      });
    });
  }

  updateStatus() {
    this.status.network.hashrate = this.status.network.difficulty / this.status.config.coinDifficultyTarget;
    this.status.network.hashrateReadable = this.dataService.hashRateWithUnit(
      this.status.network.difficulty / this.status.config.coinDifficultyTarget
    );
    this.status.network.lastBlockTime = this.dataService.timeAgo(this.status.network.timestamp);
    this.status.network.lastReward = this.dataService.getReadableCoins(this.status, this.status.network.reward, 4);
    this.status.network.lastHashExplorerUrl = this.dataService.hashToUrl(this.status, this.status.network.hash);
    this.status.pool.hashrateReadable = this.dataService.hashRateWithUnit(this.status.pool.hashrate);
    this.status.pool.lastBlockTime = this.dataService.timeAgo(this.status.pool.lastBlockFound / 1000);
    this.status.pool.blockTime = this.dataService.getReadableTime(this.status.network.difficulty / this.status.pool.hashrate);
  }

}
