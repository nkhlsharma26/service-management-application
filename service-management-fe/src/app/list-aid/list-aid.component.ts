import { Component, OnInit } from '@angular/core';
import { Aid } from '../aid';
import { Observable } from "rxjs";
import { AidService } from '../aid.service';
import { Router } from '@angular/router';
import { House } from '../house';

@Component({
  selector: 'app-list-aid',
  templateUrl: './list-aid.component.html',
  styleUrls: ['./list-aid.component.css']
})
export class ListAidComponent implements OnInit {

  aids: Observable<Aid[]>;
  house: House = new House();
  pageHeader: string;
  aid: Aid = new Aid();
  showSpinner: boolean = false;
  addAidButtonDisabled: boolean;

  constructor(private aidService: AidService,
    private router: Router) { }

  ngOnInit(): void {
    this.house = history.state.house;
    this.showSpinner = true;
    this.addAidButtonDisabled = true;
    if (this.house != undefined) {
      this.pageHeader = `${this.house.houseNo}`;
    }

    this.reloadData();

  }

  reloadData() {
    this.aidService.getAidList(this.house).subscribe(resp => {
      if (resp) {
        this.showSpinner = false;
        this.addAidButtonDisabled = false;
      }
      this.aids = resp;
    });
  }

  goToAddAid(pageName: string) {
    this.router.navigate(['/addAid'], { state: { house: this.house } });
  }

  navigate(aid: Aid): void {
    aid.house = this.house;
    this.router.navigate(['/showAid'], { state: { aid: aid } });
  }
}
