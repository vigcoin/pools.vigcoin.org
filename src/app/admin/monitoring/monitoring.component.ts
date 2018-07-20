import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
declare var $: any;

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  config;
  status;
  monitoringDaemon;
  monitoringWallet;
  pools;
  currentPool;

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
        this.renderLogInfo();
      }
    });
  }

  getCheckTime(timestamp) {
    return timestamp ? new Date(timestamp * 1000).toLocaleString() : null;
  }

  monitoringInfoParse(data) {
    const monitoringDaemon = {
      lastCheck: this.getCheckTime(data['monitoring'].daemon.lastCheck) || 'never',
      lastStatus: data['monitoring'].daemon.lastStatus || '',
      lastFail: this.getCheckTime(data['monitoring'].daemon.lastFail) || 'never',
      lastFailResponse: data['monitoring'].daemon.lastFailResponse || ' ',
      lastResponse: data['monitoring'].daemon.lastResponse || ' '
    };
    const monitoringWallet = {
      lastCheck: this.getCheckTime(data['monitoring'].wallet.lastCheck) || 'never',
      lastStatus: data['monitoring'].wallet.lastStatus || '',
      lastFail: this.getCheckTime(data['monitoring'].wallet.lastFail) || 'never',
      lastFailResponse: data['monitoring'].wallet.lastFailResponse || ' ',
      lastResponse: data['monitoring'].wallet.lastResponse || ' '
    };
    const properData = {};
    for (const prop in data) {
      if (data.hasOwnProperty('logs')) {
        for (const log of Object.keys(data['logs'])) {
          $('#log_rows').append('<tr>' +
            '<td><a target=blank href=' + this.dataService.config.api + '/admin_log?file=' + log + ' >' + log + '</a></td>' +
            '<td>' + (new Date(data['logs'][log].changed * 1000)).toLocaleString() + '</td>' +
            '<td>' + data['logs'][log].size + ' bytes' + '</td>' +
            '</tr>');
        }
      }
    }

    this.monitoringDaemon = monitoringDaemon;
    this.monitoringWallet = monitoringWallet;

  }

  renderLogInfo() {

	let url = 'http://' + this.currentPool[2].pool.host + ':' + this.currentPool[2].pool.port;
	 $.getJSON(url + '/admin_monitoring?password=' + this.getCookiesItem('password'), (data, textStatus, jqXHR) => {
	    this.monitoringInfoParse(data);
	    $('#daemonStatus').addClass(data['monitoring'].daemon.lastStatus === 'ok' ? 'text-success' : 'text-danger');
	    $('#walletStatus').addClass(data['monitoring'].wallet.lastStatus === 'ok' ? 'text-success' : 'text-danger');
	 });

  }

  getCookiesItem(key) {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
      encodeURIComponent(key).replace(/[\-\.\+\*]/g,
        '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
  }

}
