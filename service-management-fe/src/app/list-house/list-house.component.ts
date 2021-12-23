import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { House } from '../house';
import { HouseService } from '../house.service';
import { User } from '../user';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {

  constructor(private houseService: HouseService, private router: Router) { }

  houses: Observable<House[]>;
  showSpinner: boolean = false;
  addHouseButtonDisabled: boolean;
  user: User = new User();

  ngOnInit(): void {
    this.showSpinner = true;
    this.addHouseButtonDisabled = true;
    this.reloadData();
    this.user = history.state.user;
  }

  reloadData() {
    this.houseService.getHousesList().subscribe(resp => {
      if (resp) {
        this.showSpinner = false;
        this.addHouseButtonDisabled = false;
      }
      this.houses = resp;
    });
  }

  goToAddHouse(pageName: string) {
    this.router.navigate([pageName], { state: { user: this.user } });
  }

  navigate(house: House): void {
    this.router.navigate(['/ListAids'], { state: { house: house } });
  }

}
