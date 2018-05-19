import { Component, OnInit, Input } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input('status') data;

  constructor() {

  }

  ngOnInit() {
    console.log("inside status");
    console.log(this.data);
  }

  ngOnChanges() {
    console.log("inside status change");
    console.log(this.data);
    if (this.data && Object.keys(this.data).length > 0) {
      this.createCharts(this.data);
    }
  }

  getGraphData(rawData, fixValueToCoins = undefined) {
    var graphData = {
      names: [],
      values: []
    };
    if (rawData) {
      for (var i = 0, xy; xy = rawData[i]; i++) {
        graphData.names.push(new Date(xy[0] * 1000).toLocaleString());
        graphData.values.push(fixValueToCoins ? this.getReadableCoins(xy[1], 4, true) : xy[1]);
      }
    }
    return graphData;
  }

  getReadableCoins(coins, digits, withoutSymbol = null) {
    var amount = (parseInt(coins || 0) / this.data.config.coinUnits).toFixed(digits || this.data.config.coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + this.data.config.symbol));
  }
  
  createCharts(data) {
    let currencyGraphStat = {
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
      tooltipFormat: '<p align-items="center">{{y}} , {{offset:names}}  ..</p> '
    };
    if (data.hasOwnProperty("charts")) {
      var graphData = {
        profit: this.getGraphData(data.charts.profit),
        diff: this.getGraphData(data.charts.difficulty),
        hashrate: this.getGraphData(data.charts.hashrate),
        price: this.getGraphData(data.charts.price),
        workers: this.getGraphData(data.charts.workers)
      };

      for (var graphType in graphData) {
        if (graphData[graphType].values.length > 1) {
          var settings: any = currencyGraphStat;
          settings.tooltipValueLookups = { names: graphData[graphType].names; };
          var $chart = $('[data-chart=' + graphType + '] .chart');
          $chart.closest('.chartWrap').show();
          $chart.sparkline(graphData[graphType].values, settings);
        }
      }
    }
  }
}
