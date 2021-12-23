import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from '../house';
import { HouseService } from '../house.service';
import { User } from '../user';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {

  house: House = new House();
  submitted: Boolean = false;
  isValid: boolean = true;
  validationMessage = "All fields are mandatory."
  user: User = new User();

  constructor(private houseService: HouseService, private router: Router) { }


  ngOnInit(): void {
    this.user.username = localStorage.getItem("USERNAME");
    this.user.userId = parseInt(localStorage.getItem("USERID"));
  }

  newHouse(): void {
    this.submitted = false;
    this.house = new House();
  }

  save() {
    this.houseService
      .createHouse(this.house, this.user).subscribe(data => {
        console.log(data)
        this.house = new House();
        this.isValid = false;
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    if (this.house.houseNo === undefined || this.house.houseNo === null || this.house.address === undefined || this.house.address === null) {
      this.isValid = false;
      return false;
    }
    this.isValid = true;
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate([`/${this.user.username}/getAllHousesForUser`]);
  }

}
