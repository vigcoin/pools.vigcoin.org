import { Component, OnInit, Input } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  @Input('status') data;
  amount
  constructor() { }

  ngOnInit() {
  }

  //   $('#calcHashRate').keyup(calcEstimateProfit).change(calcEstimateProfit);

  // $('#calcHashUnits > li > a').click(function(e){
  //     e.preventDefault();
  //     $('#calcHashUnit').text($(this).text()).data('mul', $(this).data('mul'));
  //     calcEstimateProfit();
  // });

  changeUnits(text, unit) {
    $('#calcHashUnit').text(text).data('mul', unit);
    this.calcEstimateProfit();
  }

  calcEstimateProfit() {
    console.log("profit");
    try {
      var rateUnit = Math.pow(1024, parseInt($('#calcHashUnit').data('mul')));
      console.log("profit 1");
      console.log(rateUnit);

      var hashRate = parseFloat($('#calcHashRate').val()) * rateUnit;
      console.log("profit 3");
      console.log(hashRate);


      var profit = (hashRate * 86400 / this.data.network.difficulty) * this.data.network.reward;
      if (profit) {
        this.amount = this.getReadableCoins(profit, 2, true);
        return;
      }
    }
    catch (e) {
      console.log(e);
    }
    this.amount = "";
  }

  getReadableCoins(coins, digits, withoutSymbol = null) {
    var amount = (parseInt(coins || 0) / this.data.config.coinUnits).toFixed(digits || this.data.config.coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + this.data.config.symbol));
  }

}
