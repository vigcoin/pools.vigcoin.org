import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { DataService } from './data.service';

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
    this.dataService.get('http://vig-pool.tyk.im:8119/stats').subscribe(data => {
      this.status = data;
      this.status.network.hashrate = this.status.network.difficulty / this.status.config.coinDifficultyTarget;
      this.status.network.hashrateReadable = this.hashRateWithUnit(this.status.network.difficulty / this.status.config.coinDifficultyTarget);
      this.status.network.lastBlockTime = this.timeAgo(this.status.network.timestamp);
      this.status.network.lastReward = this.getReadableCoins(this.status.network.reward, 4);
      this.status.pool.hashrateReadable = this.hashRateWithUnit(this.status.pool.hashrate);
      this.status.pool.lastBlockTime = this.timeAgo(this.status.pool.lastBlockFound / 1000);
      this.status.pool.lastBlockTime = this.timeAgo(this.status.pool.lastBlockFound / 1000);


    });
  }

  getReadableCoins(coins, digits, withoutSymbol = null) {
    var amount = (parseInt(coins || 0) / this.status.config.coinUnits).toFixed(digits || this.status.config.coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + this.status.config.symbol));
  }

  hashRateWithUnit(hashrate) {
    var i = 0;
    var byteUnits = [' H', ' KH', ' MH', ' GH', ' TH', ' PH'];
    while (hashrate > 1000) {
      hashrate = hashrate / 1000;
      i++;
    }
    return hashrate.toFixed(2) + byteUnits[i];
  }

  timeAgo(time) {
    let now = new Date().getTime() / 1000;

    console.log(time);
    console.log(now);

    let diff = now - time;
    console.log('diff = ' + diff);
    if (diff < 60) {
      return '小于1分钟';
    }
    if (diff < 3600) {
      return (diff / 60).toFixed(0) + '分钟前';
    }

    if (diff < 24 * 3600) {
      return (diff / 3600).toFixed(0) + '小时前';
    }

    if (diff < 30 * 24 * 3600) {
      return (diff / 24 * 3600).toFixed(0) + '天前';
    }

    if (diff < 12 * 30 * 24 * 3600) {
      return (diff / 30 * 24 * 3600).toFixed(0) + '年前';
    }

  }
}
