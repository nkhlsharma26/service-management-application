import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expanse } from '../expanse';
import { ExpanseService } from '../expanse.service';

@Component({
  selector: 'app-create-expanse',
  templateUrl: './create-expanse.component.html',
  styleUrls: ['./create-expanse.component.css']
})
export class CreateExpanseComponent implements OnInit {

  constructor(private expanseService: ExpanseService, private router: Router) { }

  expanse: Expanse = new Expanse();
  submitted: boolean = false;
  isValid: boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.expanse.amount && this.expanse.comment && this.expanse.date) {
      this.isValid = true;
      this.expanse.username = localStorage.getItem("USERNAME");

      this.expanseService.createExpanse(this.expanse).subscribe(data => {
        if (data) {
          console.log(data)
          this.expanse = new Expanse();
          this.expanse = data;
          this.isValid = false;
          this.gotoExpanseList();
        }
      },
        (error: any) => console.log(error));
    }
  }

  gotoExpanseList() {
    this.router.navigate([`/getAllExpensesForUser/${this.expanse.username}`], { state: { username: this.expanse.username } });
  }

}
