import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $: any;

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {

  config
  status

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.config = this.dataService.config;

    this.dataService.get(this.dataService.config.api + '/stats').subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.init();
      }
    });
  }

  calculateTotalFee(config) {
    let totalFee = config.config.fee;
    for (let property in config.config.donation) {
      if (config.config.donation.hasOwnProperty(property)) {
        totalFee += config.config.donation[property];
      }
    }
    return totalFee;
  }

  init() {
    const NETWORK_STAT_MAP = new Map(this.dataService.config.networkStat[this.status.config.symbol.toLowerCase()]);
    NETWORK_STAT_MAP.forEach((url, host, map) => {
      $.getJSON(url + '/stats', (data, textStatus, jqXHR) => {
        $('#network_rows').append('<tr>' +
          '<td id=host-' + host + '><a target=blank href=http://' + host + '>' + host + '</a> (' + data.config.symbol + ')</td>' +
          '<td id=height-' + host + '>' + data.network.height + '</td>' +
          '<td id=hashrate-' + host + '>' + data.pool.hashrate + '&nbsp;H/s</td>' +
          '<td id=miners-' + host + '>' + data.pool.miners + '</td>' +
          '<td id=totalFee-' + host + '>' + this.calculateTotalFee(data) + '%</td>' +
          '<td id=lastBlockFound-' + host + '>' + new Date(parseInt(data.pool.lastBlockFound)).toLocaleString() + '</td>' +
          '</tr>');
      });
    });
  }
}
