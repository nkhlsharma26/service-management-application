import { Component, Input, OnInit } from '@angular/core';
import { AidService } from '../aid.service';
import { Router } from '@angular/router';
import { Aid } from '../aid';
import { House } from '../house';
import { Payment } from '../payment';

@Component({
  selector: 'app-create-aid',
  templateUrl: './create-aid.component.html',
  styleUrls: ['./create-aid.component.css']
})
export class CreateAidComponent implements OnInit {

  aid: Aid = new Aid();
  submitted = false;
  house: House = new House();
  payment: Payment = new Payment();
  pageHeader: string;
  isValid: boolean = true;
  validationMessage = "All fields are mandatory.";
  invalidDate = false;
  dateValidationMessage = "End Date must be greater then Start Date."

  constructor(private aidService: AidService,
    private router: Router) { }

  ngOnInit(): void {
    this.house = history.state.house;
    this.payment.comment = "Advance payment";
    this.pageHeader = `${this.house.houseNo}, ${this.house.address}`;
  }

  newAid(): void {
    this.submitted = false;
    this.aid = new Aid();
  }

  save() {
    var house = new House();
    var payment = new Payment();
    house.houseId = this.house.houseId;
    this.aid.house = house;
    payment.amount = this.payment.amount;
    payment.comment = this.payment.comment;
    this.aid.payments[0] = payment;

    this.aidService
      .createAid(this.house, this.aid).subscribe(data => {
        if (data) {
          console.log(data)
          this.aid = new Aid();
          this.isValid = false;
          this.gotoAidList();
        }

      },
        error => console.log(error));
  }

  onSubmit() {
    if (this.aid.name && this.aid.startDate && this.aid.startDate && this.aid.endDate && this.aid.costOfService) {
      var start = (<HTMLInputElement>document.getElementById("startDate")).valueAsNumber;
      var end = (<HTMLInputElement>document.getElementById("endDate")).valueAsNumber;

      if (end < start) {
        this.invalidDate = true;
        return false;
      }
      this.isValid = true;
      this.submitted = true;
      this.save();
      this.gotoAidList();
    }
    else {
      this.isValid = false;
      return false;
    }

  }

  gotoAidList() {
    this.router.navigate([`/${this.house.houseId}/getAllAidsForHouse`], { state: { house: this.house } });
  }

}
