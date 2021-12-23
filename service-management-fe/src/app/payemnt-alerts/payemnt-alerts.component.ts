import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentAlertService } from './payment-alert.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-payemnt-alerts',
  templateUrl: './payemnt-alerts.component.html',
  styleUrls: ['./payemnt-alerts.component.css']
})
export class PayemntAlertsComponent implements OnInit {
  missedAlerts: Alert[] = new Array<Alert>();
  warningAlert: Alert[] = new Array<Alert>();

  constructor(private router: Router, private paymentAlertService: PaymentAlertService) {
  }

  ngOnInit(): void {
    this.paymentAlertService.getMissedPayments().subscribe(data => {
      if (data) {
        var d = data as Array<string>;
        d.forEach(e => {
          var a: Alert = { type: "alert alert-danger", message: e };
          this.missedAlerts.push(a);
        });
        this.missedAlerts.concat(data as Array<Alert>);
      }
    },
      (error: any) => console.log(error)
    );

    this.paymentAlertService.getPaymentNotification().subscribe(data => {
      if (data) {
        var d = data as Array<string>;
        d.forEach(e => {
          var a: Alert = { type: "alert alert-danger", message: e };
          this.warningAlert.push(a);
        });
        this.warningAlert.concat(data as Array<Alert>);
      }
    },
      (error: any) => console.log(error)
    );
  }

  closeMissed(alert: Alert) {
    this.missedAlerts.splice(this.missedAlerts.indexOf(alert), 1);
  }

  closeWarning(alert: Alert) {
    this.warningAlert.splice(this.warningAlert.indexOf(alert), 1);
  }

  reset() {
    this.missedAlerts = Array.from(this.missedAlerts);
  }

}
