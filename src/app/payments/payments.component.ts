import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $: any;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  config?;
  status?;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.config = this.dataService.config;
    this.dataService.get(this.config.api + '/stats').subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.status.config.minPaymentThresholdText =
          this.dataService.getReadableCoins(this.status, this.status.config.minPaymentThreshold, 2);
        this.status.config.denominationUnitText =
          this.dataService.getReadableCoins(this.status, this.status.config.denominationUnit, 2);
        this.renderPayments(this.status.pool.payments);
      }
    });
  }

  getMore() {
    this.dataService.get(this.dataService.config.api + '/get_payments', {
      time: $('#payments_rows').children().last().data('time')
    }).subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.renderPayments(data);
      }
    });
  }

  formatPaymentLink(hash) {
    return '<a href="' + this.dataService.getTransactionUrl(this.status, hash) + '">' + hash + '</a>';
  }

  getPaymentCells(payment) {
    return '<td>' + this.dataService.formatDate(payment.time) + '</td>' +
      '<td>' + this.formatPaymentLink(payment.hash) + '</td>' +
      '<td>' + this.dataService.getReadableCoins(this.status, payment.amount, 4, true) + '</td>' +
      '<td>' + this.dataService.getReadableCoins(this.status, payment.fee, 4, true) + '</td>' +
      '<td>' + payment.mixin + '</td>' +
      '<td>' + payment.recipients + '</td>';
  }

  getPaymentRowElement(payment, jsonString) {

    var row = document.createElement('tr');
    row.setAttribute('data-json', jsonString);
    row.setAttribute('data-time', payment.time);
    row.setAttribute('id', 'paymentRow' + payment.time);

    row.innerHTML = this.getPaymentCells(payment);

    return row;
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
}
