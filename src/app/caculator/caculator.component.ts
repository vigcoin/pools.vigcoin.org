import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit, OnChanges {
  @Input('status') data;
  amount = '0';
  text = 'KH';
  unit = 1;
  hashrate;
  symbol = 'VIG';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.data) {
      this.symbol = this.data.config.symbol;
    }
  }

  changeUnits(text, unit) {
    this.text = text;
    this.unit = unit;
    this.calcEstimateProfit();
    return false;
  }

  calcEstimateProfit() {
    console.log('profit');
    try {
      const rateUnit = Math.pow(1024, this.unit);
      console.log('profit 1');
      console.log(rateUnit);

      const hashRate = parseFloat(this.hashrate) * rateUnit;
      console.log('profit 3');
      console.log(hashRate);


      const profit = (hashRate * 86400 / this.data.network.difficulty) * this.data.network.reward;
      if (profit) {
        this.amount = this.getReadableCoins(profit, 2, true);
        return;
      }
    } catch (e) {
      console.log(e);
    }
    this.amount = '0';
  }

  getReadableCoins(coins, digits, withoutSymbol = null) {
    const amount = (parseInt(coins || 0, 10)
      / this.data.config.coinUnits)
      .toFixed(digits || this.data.config.coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + this.data.config.symbol));
  }

}
