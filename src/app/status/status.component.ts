import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { DataService } from '../data.service';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, OnChanges {

  @Input('status') data;

  pools;
  currentPool;

  constructor(private dataService: DataService, ) {

  }

  ngOnInit() {
    console.log('inside status');
    console.log(this.data);
    this.pools = this.dataService.getPools();
    if (this.pools.length) {
      this.currentPool = this.dataService.getCurrentPool();
    }
  }

  ngOnChanges() {
    console.log('inside status change');
    console.log(this.data);
    if (this.data && Object.keys(this.data).length > 0) {
      this.createCharts(this.data);
    }
  }

  getGraphData(rawData, fixValueToCoins?) {
    const graphData = {
      names: [],
      values: []
    };
    if (rawData) {
      for (let i = 0, xy; xy = rawData[i]; i++) {
        graphData.names.push(new Date(xy[0] * 1000).toLocaleString());
        graphData.values.push(fixValueToCoins ? this.getReadableCoins(xy[1], 4, true) : xy[1]);
      }
    }
    return graphData;
  }

  getReadableCoins(coins, digits, withoutSymbol = null) {
    const amount = (parseInt(coins || 0, 10) / this.data.config.coinUnits)
      .toFixed(digits || this.data.config.coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + this.data.config.symbol));
  }

  createCharts(data) {
    const currencyGraphStat = {
      type: 'line',
      width: '100%',
      height: '75',
      lineColor: '#03a678',
      fillColor: 'rgba(3, 166, 120, .3)',
      spotColor: null,
      minSpotColor: null,
      maxSpotColor: null,
      highlightLineColor: '#236d26',
      spotRadius: 3,
      chartRangeMin: 0,
      drawNormalOnTop: false,
      tooltipFormat: '<p style="margin-right:10px">{{y}} , {{offset:names}}</p>'
    };
    if (data.hasOwnProperty('charts')) {
      const graphData = {
        profit: this.getGraphData(data.charts.profit),
        diff: this.getGraphData(data.charts.difficulty),
        hashrate: this.getGraphData(data.charts.hashrate),
        price: this.getGraphData(data.charts.price),
        workers: this.getGraphData(data.charts.workers)
      };

      for (const graphType in graphData) {
        if (graphData[graphType].values.length > 1) {
          const settings: any = currencyGraphStat;
          settings.tooltipValueLookups = { names: graphData[graphType].names };
          const $chart = $('[data-chart=' + graphType + '] .chart');
          $chart.closest('.chartWrap').show();
          $chart.sparkline(graphData[graphType].values, settings);
        }
      }
    }
  }

  onClick(index) {
    this.dataService.selectPool(index);
    window.location.reload();
  }
}
