import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expanse } from '../expanse';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { ExpanseService } from '../expanse.service';
import { map } from 'rxjs-compat/operator/map';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-expanse',
  templateUrl: './list-expanse.component.html',
  styleUrls: ['./list-expanse.component.css']
})
export class ListExpanseComponent implements OnInit {
  showSpinner: boolean = false;
  addExpanseButtonDisabled: boolean;
  expanses: Map<string, Expanse[]>;
  sortedExpanses: Map<string, Expanse[]>;
  //expanse: Expanse = new Expanse();
  username: String;

  constructor(private expanseService: ExpanseService, private router: Router) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.addExpanseButtonDisabled = true;
    this.reloadData();
  }

  reloadData() {
    this.username = localStorage.getItem("USERNAME");
    this.expanseService.getExpanseListForUser(this.username).subscribe(resp => {
      if (resp) {
        this.showSpinner = false;
        this.addExpanseButtonDisabled = false;
      }
      this.expanses = resp;
      this.expanses;
      this.sortedExpanses = this.sortByDate(this.expanses);
    },
      error => console.log(error));
  }

  sortByDate(expanses: Map<string, Expanse[]>): Map<string, Expanse[]> {
    var k: string[] = Object.keys(expanses);;
    k.sort((one, two) => (one > two ? -1 : 1));
    var result: Map<string, Expanse[]> = new Map;
    k.forEach(element => {
      result.set(element, expanses[element]);
    });
    return result
  }

  asIsOrder(a, b) {
    return 1;
  }
  goToAddExpanse(route: String) {
    this.router.navigate([`/${route}`]);
  }

}
