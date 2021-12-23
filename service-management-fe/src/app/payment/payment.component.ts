import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment = new Payment();
  submitted: Boolean = false;
  isValid: boolean = true;
  validationMessage = "All fields are mandatory.";
  @Output() closePaymentBox: EventEmitter<boolean> = new EventEmitter();

  @Input() aidId: number;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  newPayment(): void {
    this.submitted = false;
    this.payment = new Payment();
  }

  onSubmit() {
    if (this.payment.amount === undefined || this.payment.amount === null || this.payment.comment === undefined || this.payment.comment === null) {
      this.isValid = false;
      return false;
    }
    this.isValid = true;
    this.submitted = true;
    this.save();
  }

  save() {
    this.paymentService
      .createPayment(this.payment, this.aidId).subscribe(data => {
        console.log(data)
        this.payment = new Payment();
        this.isValid = false;
        this.closePaymentBox.emit(true);
      },
        error => console.log(error));
  }

  closePaymentDialouge() {
    this.closePaymentBox.emit(true);
  }
}
