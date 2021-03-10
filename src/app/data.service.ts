import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable()
export class DataService {

  /**
   * Statuses
   */
  status;
  liveStatus;
  addressStatus;

  /**
   * Pool urls
   */
  pools;

  defaultIndex = 0;
  currentPool;
  currentAPI;
  config: any = {
    // api: 'http://localhost:8119',
    // api: 'http://vig-pool.tyk.im:8119',
    // api: 'http://pool-1.vigcoin.org:8119',
    // api_blockexplorer: 'http://vig-pool.tyk.im:19810',

    // poolHost: 'vig-pool.tyk.im',

    // poolPort: 6666,

    irc: 'irc.freenode.net/#vig',

    email: 'calidion@gmail.com',

    cryptonatorWidget: ['{symbol}-BTC', '{symbol}-USD', '{symbol}-EUR'],

    easyminerDownload: 'https://github.com/zone117x/cryptonote-easy-miner/releases/',

    blockchainExplorer: '/?hash={id}#blockchain_block',

    transactionExplorer: '/blockchina/transaction/{id}',

    themeCss: 'themes/default-theme.css',

    interval: 20000,

    networkStat: {
      'vig': [
        ['https://pools.vigcoin.org ', 'https://pool.vigcoin.org',
          {
            pool: {
              host: 'pool.vigcoin.org',
              port: 443
            },
            url: 'https://pools.vigcoin.org',
            desc: '主矿池'
          }
        ],
        ['http://vig-pool.tyk.im', 'https://pool-status.vigcoin.org',
          {
            pool: {
              host: 'vig-pool.tyk.im',
              port: 8119
            },
            url: 'https://pools.vigcoin.org',
            desc: '旧矿池'
          }
        ],
        ['http://pool-1.vigcoin.org', 'http://pool-1.vigcoin.org:8119', {
          pool: {
            host: 'pool-1.vigcoin.org',
            port: 8119
          },
          url: 'http://pool-1.vigcoin.org:8119',
          desc: '测试矿池'
        }]
      ]
    }
  };

  storageIndexName = 'pool-index';

  constructor(
    private http: HttpClient
  ) {
    this.pools = this.config.networkStat.vig;
    try {
      this.defaultIndex = parseInt(localStorage.getItem(this.storageIndexName), 10);
    } catch (e) {
      console.log(e);
      this.defaultIndex = 0;
    }
    this.selectPool(this.defaultIndex);
  }

  selectPool(i) {
    this.defaultIndex = i || 0;
    if (this.defaultIndex > this.pools.length) {
      this.defaultIndex = 0;
    }
    localStorage.setItem(this.storageIndexName, String(this.defaultIndex));
    if (this.pools.length <= 0) {
      return;
    }
    this.currentPool = this.pools[this.defaultIndex];
    this.currentAPI = this.currentPool[1];
  }

  getPools() {
    return this.pools;
  }

  getCurrentPool() {
    return this.currentPool;
  }

  getCurrentUrl() {
    return this.currentAPI;
  }

  getAdminStatus(password) {
    const sub = this.get(this.currentAPI + '/admin_stats?password=' + password);
    return sub;
  }

  getPayments(options) {
    const sub = this.get(this.currentAPI + '/get_payments', options);
    return sub;
  }

  getStatus() {
    if (this.status) {
      return of(this.status);
    }
    const sub = this.get(this.currentAPI + '/stats');
    sub.subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
      }
    });
    return sub;
  }

  getLiveStatus() {
    console.log('inside getStatus');
    if (this.liveStatus) {
      return of(this.liveStatus);
    }
    const sub = this.get(this.currentAPI + '/live_stats');
    sub.subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.liveStatus = data;
      }
    });
    return sub;
  }

  getAddressStatus(options) {
    console.log('inside getStatus');
    if (this.addressStatus) {
      return of(this.addressStatus);
    }
    const sub = this.get(this.currentAPI + '/stats_address', options);
    sub.subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.addressStatus = data;
      }
    });
    return sub;
  }

  clearAddressStatus() {
    this.addressStatus = null;
  }

  getBlocks(options) {
    return this.get(this.currentAPI + '/get_blocks', options);
  }

  get(url, params?) {
    return this.http.get(url, { params: params });
  }
  post(url, data) {
    return this.http.post(url, data);
  }

  timeAgo(time) {
    const now = new Date().getTime() / 1000;

    console.log(time);
    console.log(now);

    const diff = now - time;
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
      return (diff / 30 / 24 / 3600).toFixed(0) + ' 月前';
    }

    return (diff / 12 / 30 / 24 / 3600).toFixed(0) + ' 年前';
  }

  formatAmounts(amount, unit) {
    const rounded = Math.round(amount);
    return '' + rounded + ' ' + unit;
  }

  getReadableTime(seconds) {

    const units: any = [[60, '秒'], [60, '分钟'], [24, '小时'],
    [7, '天'], [4, '周'], [12, '月'], [1, '年']];


    let amount = seconds;
    let i = 0;
    for (; i < units.length; i++) {
      if (amount < units[i][0]) {
        return this.formatAmounts(amount, units[i][1]);
      }
      amount = amount / units[i][0];
    }
    return this.formatAmounts(amount, units[i - 1][1]);
  }

  getBlockchainUrl(status, id) {
    return this.hashToUrl(status, id);
  }

  hashToUrl(status, id) {
    const explorer = this.config.blockchainExplorer;
    return explorer.replace('{symbol}', status.config.symbol.toLowerCase()).replace('{id}', id);
  }

  getTransactionUrl(status, id) {
    const explorer = this.config.transactionExplorer;
    return explorer.replace('{symbol}', status.config.symbol.toLowerCase()).replace('{id}', id);
  }

  getReadableCoins(status, coins, digits, withoutSymbol = null) {

    const coinUnits = status.config?.coinUnits;
    const amount = (parseInt(coins || 0, 10)
      / coinUnits).toFixed(
        digits || coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + status.config.symbol));
  }

  formatDate(time) {
    if (!time) { return ''; }
    return new Date(parseInt(time, 10) * 1000).toLocaleString();
  }

  hashRateWithUnit(hashrate) {
    let i = 0;
    const byteUnits = [' H', ' KH', ' MH', ' GH', ' TH', ' PH'];
    while (hashrate > 1000) {
      hashrate = hashrate / 1000;
      i++;
    }
    return hashrate.toFixed(2) + byteUnits[i];
  }


  getReadableHashRateString(hashrate) {
    return this.hashRateWithUnit(hashrate);
  }
}
