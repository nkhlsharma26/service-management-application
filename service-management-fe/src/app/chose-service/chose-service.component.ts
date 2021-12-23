import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-chose-service',
  templateUrl: './chose-service.component.html',
  styleUrls: ['./chose-service.component.css']
})
export class ChoseServiceComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  username: string = localStorage.getItem("USERNAME");

  ngOnInit(): void {
    this.user = history.state.user;
    document.getElementById("headerDiv").style.opacity = "1";
    document.getElementById("profilePic").innerHTML = this.username.slice(0, 2).toUpperCase();
  }
  navigateToDEM(route: string) {
    this.router.navigate([`${route}/${this.username}`]);
  }

  navigateToDSM(route: string) {
    this.router.navigate([`${this.username}/getAllHousesForUser`], { state: { user: this.user } });
  }
}
