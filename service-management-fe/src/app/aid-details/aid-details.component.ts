import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';
import { Aid } from '../aid';
import { AidService } from '../aid.service';

@Component({
  selector: 'app-aid-details',
  templateUrl: './aid-details.component.html',
  styleUrls: ['./aid-details.component.css']
})
export class AidDetailsComponent implements OnInit {

  aid: Aid = new Aid();
  pageTitle: string;
  havePaid: boolean;
  addPaymentClicked: boolean;
  showSpinner: boolean;
  updateAidButtonDisabled: boolean;

  constructor(private route: ActivatedRoute, private router: Router,
    private aidService: AidService) { }

  ngOnInit(): void {
    this.aid = new Aid();
    this.aid = history.state.aid;
    this.showSpinner = true;
    this.updateAidButtonDisabled = true;
    document.getElementById("aidDetail").style.opacity = "0.5";
    document.getElementById("headerDiv").style.opacity = "0.5";
    this.getAid();
  }

  private getAid() {
    this.aidService.getAid(this.aid)
      .subscribe(data => {
        if (data) {
          document.getElementById("aidDetail").style.opacity = "1";
          document.getElementById("headerDiv").style.opacity = "1";
          this.showSpinner = false;
          this.updateAidButtonDisabled = false;
          console.log(data);
          this.aid = data;
          this.havePaid = this.aid.payments.length > 0 && this.aid.payments[0].amount > 0 ? true : false;
          this.pageTitle = `${this.aid.name}, ${this.aid.house.houseNo}`;
        }

      }, error => console.log(error));
  }

  updateAid(aid: Aid) {
    this.router.navigate(['/updateAid'], { state: { aid: aid } });
  }

  addPayment() {

    this.addPaymentClicked = true;
  }

  paymentSuccessfulHandler(paymentSuccessful: boolean) {
    this.addPaymentClicked = false;
    this.getAid();
  }
}
