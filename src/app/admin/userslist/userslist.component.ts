import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
declare var $: any;

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  pools;
  currentPool;
  config;
  status;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
	this.pools = this.dataService.getPools();
    if (this.pools.length) {
      this.currentPool = this.dataService.getCurrentPool();
    }
	
	
    this.config = this.dataService.config;

    this.dataService.getStatus().subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.init();
      }
    });
  }

  init() {

	const url = 'http://' + this.currentPool[2].pool.host + ':' + this.currentPool[2].pool.port;
	const host = this.currentPool[2].pool.host;
  
      $.getJSON(url + '/admin_users?password=' + this.getCookiesItem('password'), (data, textStatus, jqXHR) => {
        data = this.parseUsers(data);
        for (let i = 0; i < data.length; i += 1) {
          $('#users_rows').append('<tr>' +
            '<td id=number-' + host + '><a href=./?wallet=' + data[i].number + '>' + data[i].number + '</a></td>' +
            '<td id=readableHashrate-' + host + '>' + data[i].readableHashrate + '</td>' +
            '<td id=readableHashes-' + host + '>' + data[i].readableHashes + '</td>' +
            '<td id=readablePending-' + host + '>' + data[i].readablePending + '</td>' +
            '<td id=readablePaid-' + host + '>' + data[i].readablePaid + '</td>' +
            '<td id=timeago-' + host + '>' + data[i].timeago + '</td>' +
            '</tr>');
        }
      });

  }

  parseUsers(wallets) {

    const walletsArray = [];
    let properObject;
    for (const wallet in wallets) {
      if (wallets.hasOwnProperty(wallet)) {
        const userData = wallets[wallet];
        walletsArray.push({
          number: wallet,
          wallet: userData,
          timeago: new Date(userData.lastShare * 1000).toLocaleString(),
          readablePending: this.dataService.getReadableCoins(this.status, userData.pending, 4),
          readablePaid: this.dataService.getReadableCoins(this.status, userData.paid, 4),
          readableHashrate: this.getReadableHashRateString(userData.hashrate) + '/s',
          readableHashes: this.getReadableHashRateString(userData.hashes)
        });
      }
    }

    properObject = walletsArray.sort(function (a, b) {

      return a.wallet.hashrate - b.wallet.hashrate;
    }).reverse();

    return properObject;
  }

  getReadableHashRateString(hashrate) {
    hashrate = hashrate || 0;
    let i = 0;
    const byteUnits = [' H', ' KH', ' MH', ' GH', ' TH', ' PH'];
    while (hashrate > 1000) {
      hashrate = hashrate / 1000;
      i++;
    }
    return parseFloat(hashrate).toFixed(2) + byteUnits[i];
  }

  getCookiesItem(key) {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
      encodeURIComponent(key).replace(/[\-\.\+\*]/g,
        '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
  }

}
