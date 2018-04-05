import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DataService {
  config: any = {
    api: "http://vig-pool.tyk.im:8119",

    api_blockexplorer: "http://vig-pool.tyk.im:19810",

    poolHost: "vig-pool.tyk.im",

    irc: "irc.freenode.net/#vig",

    email: "calidion@gmail.com",

    cryptonatorWidget: ["{symbol}-BTC", "{symbol}-USD", "{symbol}-EUR"],

    easyminerDownload: "https://github.com/zone117x/cryptonote-easy-miner/releases/",

    blockchainExplorer: "/?hash={id}#blockchain_block",

    transactionExplorer: "/?hash={id}#blockchain_transaction",

    themeCss: "themes/default-theme.css",

    interval: 20000,

    networkStat: {
      "vig": [
        ["vig.tyk.im", "http://vig-pool.tyk.im:8119"],
        ["pool.vigcoin.org", "pool.vigcoin.org:8119"]
      ],
      "bcn": [
        ["democats.org", "http://pool.democats.org:7603"]
      ]
    }
  }

  constructor(
    private http: HttpClient
  ) { }

  get(url, params = undefined) {
    return this.http.get(url, { params: params });
  }
  post(url, data) {
    return this.http.post(url, data);
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
      return (diff / 60).toFixed(0) + ' 分钟前';
    }

    if (diff < 24 * 3600) {
      return (diff / 3600).toFixed(0) + ' 小时前';
    }

    if (diff < 30 * 24 * 3600) {
      return (diff / 24 / 3600).toFixed(0) + ' 天前';
    }

    if (diff < 12 * 30 * 24 * 3600) {
      return (diff / 30 / 24 / 3600).toFixed(0) + ' 年前';
    }
  }

  getReadableTime(seconds) {

    let units: any = [[60, '秒'], [60, '分钟'], [24, '小时'],
    [7, '天'], [4, '周'], [12, '月'], [1, '年']];

    function formatAmounts(amount, unit) {
      var rounded = Math.round(amount);
      return '' + rounded + ' ' + unit;
    }
    let amount = seconds;
    let i = 0;
    for (; i < units.length; i++) {
      if (amount < units[i][0])
        return formatAmounts(amount, units[i][1]);
      amount = amount / units[i][0];
    }
    return formatAmounts(amount, units[i - 1][1]);
  }

  hashToUrl(status, id) {
    console.log(this.config.blockchainExplorer);
    let explorer = this.config.blockchainExplorer;
    return explorer.replace('{symbol}', status.config.symbol.toLowerCase()).replace('{id}', id);
  }

  getReadableCoins(status, coins, digits, withoutSymbol = null) {
    var amount = (parseInt(coins || 0) / status.config.coinUnits).toFixed(digits || status.config.coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + status.config.symbol));
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


}
