import { Component, OnInit, Input, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Rx';
declare var $: any;

@Injectable()
export class DocCookies {
  getItem(key) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" +
      encodeURIComponent(key).replace(/[\-\.\+\*]/g,
        "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  }

  setItem(sKey, sValue, vEnd, sPath = '', sDomain = "", bSecure = false) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  }

  removeItem(sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  }
  hasItem(sKey) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  }

}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input() data;
  address;
  query = false;
  status

  constructor(private dataService: DataService, private docCookies: DocCookies) {

    this.address = this.docCookies.getItem('mining_address');
  }

  ngOnInit() {
    if (this.address) {
      this.getAddressStatus(this.address);
    }
    // Periodical Get Address Info
    Observable.interval(this.dataService.config.interval || 10000).subscribe((v) => {
      console.log("v = " + v);
      if (this.address) {
        this.getAddressStatus(this.address);
      }
    });
  }

  onAddressChange() {
    this.docCookies.setItem('mining_address', this.address, Infinity);
  }

  queryAddress() {
    this.getAddressStatus(this.address);
  }

  getAddressStatus(address) {
    this.docCookies.setItem('mining_address', address, Infinity);
    this.query = true;
    this.dataService.get(this.dataService.config.api + '/stats_address', { address: this.address, longpoll: false }).subscribe(data => {
      this.query = false;
      console.log(data);
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.status.stats.lastShareTime = this.dataService.timeAgo(this.status.stats.lastShare);
        this.status.stats.paidText = this.dataService.getReadableCoins(this.data, this.status.stats.paid, 4);
        this.status.stats.balanceText = this.dataService.getReadableCoins(this.data, this.status.stats.balance, 4);
        this.status.stats.hashrate = this.status.stats.hashrate || '0 H';
        this.createUserCharts(this.data, data);
        this.renderPayments(this.status.payments);
      }
    });
  }


  parsePayment(time, serializedPayment) {
    var parts = serializedPayment.split(':');
    return {
      time: parseInt(time),
      hash: parts[0],
      amount: parts[1],
      fee: parts[2],
      mixin: parts[3],
      recipients: parts[4]
    };
  }

  formatDate(time) {
    if (!time) return '';
    return new Date(parseInt(time) * 1000).toLocaleString();
  }

  formatPaymentLink(hash) {
    return '<a href="' + this.dataService.hashToUrl(this.data, hash) + '">' + hash + '</a>';
  }

  getPaymentCells(payment) {
    return '<td>' + this.formatDate(payment.time) + '</td>' +
      '<td>' + this.formatPaymentLink(payment.hash) + '</td>' +
      '<td>' + this.dataService.getReadableCoins(this.data, payment.amount, 4, true) + '</td>' +
      '<td>' + payment.mixin + '</td>';
  }

  getPaymentRowElement(payment, jsonString) {

    var row = document.createElement('tr');
    row.setAttribute('data-json', jsonString);
    row.setAttribute('data-time', payment.time);
    row.setAttribute('id', 'paymentRow' + payment.time);

    row.innerHTML = this.getPaymentCells(payment);

    return row;
  }

  renderPayments(paymentsResults) {

    var $paymentsRows = $('#payments_rows');

    for (var i = 0; i < paymentsResults.length; i += 2) {

      var payment = this.parsePayment(paymentsResults[i + 1], paymentsResults[i]);

      var paymentJson = JSON.stringify(payment);

      var existingRow = document.getElementById('paymentRow' + payment.time);

      if (existingRow && existingRow.getAttribute('data-json') !== paymentJson) {
        $(existingRow).replaceWith(this.getPaymentRowElement(payment, paymentJson));
      }
      else if (!existingRow) {

        var paymentElement = this.getPaymentRowElement(payment, paymentJson);

        var inserted = false;
        var rows = $paymentsRows.children().get();
        for (var f = 0; f < rows.length; f++) {
          var pTime = parseInt(rows[f].getAttribute('data-time'));
          if (pTime < payment.time) {
            inserted = true;
            $(rows[f]).before(paymentElement);
            break;
          }
        }
        if (!inserted)
          $paymentsRows.append(paymentElement);
      }

    }
  }

  createUserCharts(status, data) {
    var userGraphStat = {
      hashrate: {
        type: 'line',
        width: '100%',
        height: '180',
        lineColor: '#03a678',
        fillColor: 'rgba(3, 166, 120, .3)',
        spotColor: null,
        minSpotColor: null,
        maxSpotColor: null,
        highlightLineColor: '#236d26',
        spotRadius: 3,
        drawNormalOnTop: false,
        chartRangeMin: 0,
        tooltipFormat: '<b>{{y}}</b>, {{offset:names}}'
      },
      payments: {
        type: 'line',
        width: '100%',
        height: '180',
        lineColor: '#03a678',
        fillColor: 'rgba(3, 166, 120, .3)',
        spotColor: null,
        minSpotColor: null,
        maxSpotColor: null,
        highlightLineColor: '#236d26',
        spotRadius: 3,
        drawNormalOnTop: false,
        chartRangeMin: 0,
        tooltipFormat: '<b>{{y}}</b>, {{offset:names}}'
      }
    };
    for (var chart in userGraphStat) {
      if (data['charts'][chart] && data['charts'][chart].length) {
        var graphData = this.getGraphData(status, data['charts'][chart], chart == 'payments');
        userGraphStat[chart].tooltipValueLookups = { names: graphData.names };
        $('[data-chart=user_' + chart + ']').show().find('.chart').sparkline(graphData.values, userGraphStat[chart]);
      }
    }
  }

  getGraphData(status, rawData, fixValueToCoins) {
    var graphData = {
      names: [],
      values: []
    };
    if (rawData) {
      for (var i = 0, xy; xy = rawData[i]; i++) {
        graphData.names.push(new Date(xy[0] * 1000).toUTCString());
        graphData.values.push(fixValueToCoins ? this.dataService.getReadableCoins(status, xy[1], 4, true) : xy[1]);
      }
    }


    return graphData;
  }

  loadMore() {
    this.dataService.get(this.dataService.config.api + '/get_payments',
      {
        address: this.address,
        time: $('#payments_rows').children().last().data('time')
      }).subscribe(data => {
        if (Object.keys(data).length > 0) {
          this.renderPayments(data);
        } else {
          $('#loadMorePayments').text('没有更多的数据了!').attr('disable', 'disable');
        }
      });
  }


}
