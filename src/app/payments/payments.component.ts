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
    this.dataService.getStatus().subscribe(data => {
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
    this.dataService.getPayments({
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

    const row = document.createElement('tr');
    row.setAttribute('data-json', jsonString);
    row.setAttribute('data-time', payment.time);
    row.setAttribute('id', 'paymentRow' + payment.time);

    row.innerHTML = this.getPaymentCells(payment);

    return row;
  }

  parsePayment(time, serializedPayment) {
    const parts = serializedPayment.split(':');
    return {
      time: parseInt(time, 10),
      hash: parts[0],
      amount: parts[1],
      fee: parts[2],
      mixin: parts[3],
      recipients: parts[4]
    };
  }

  renderPayments(paymentsResults) {

    const $paymentsRows = $('#payments_rows');

    for (let i = 0; i < paymentsResults.length; i += 2) {

      const payment = this.parsePayment(paymentsResults[i + 1], paymentsResults[i]);

      const paymentJson = JSON.stringify(payment);

      const existingRow = document.getElementById('paymentRow' + payment.time);

      if (existingRow && existingRow.getAttribute('data-json') !== paymentJson) {
        $(existingRow).replaceWith(this.getPaymentRowElement(payment, paymentJson));
      } else if (!existingRow) {

        const paymentElement = this.getPaymentRowElement(payment, paymentJson);

        let inserted = false;
        const rows = $paymentsRows.children().get();
        for (let f = 0; f < rows.length; f++) {
          const pTime = parseInt(rows[f].getAttribute('data-time'), 10);
          if (pTime < payment.time) {
            inserted = true;
            $(rows[f]).before(paymentElement);
            break;
          }
        }
        if (!inserted) {
          $paymentsRows.append(paymentElement);
        }
      }

    }
  }
}
