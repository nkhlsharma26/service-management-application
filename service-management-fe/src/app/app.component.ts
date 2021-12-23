import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var cordova;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DSM';
  notId: number = 1;
  alertData: string[];
  homeButtonSelected: boolean;
  paymentsButtonSelected: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.addEventListener("deviceready", function () { }, false);

    var username = localStorage.getItem("USERNAME");
    if (username) {
      var initials = username.slice(0, 2);
      document.getElementById("profilePic").innerHTML = initials.toUpperCase();
    }

    document.getElementById("homeButton").style.backgroundColor = "#BFBAB5";
    this.homeButtonSelected = true;
    this.paymentsButtonSelected = false;
    cordova.plugins.notification.local.schedule({
      id: 1,
      title: 'DSM Payment Reminder!',
      text: 'Check your payments and overdues for today!',
      trigger: { every: { hour: 9, minute: 15 }, count: 1 },
    });

  }

  home() {
    this.homeButtonSelected = true;
    this.paymentsButtonSelected = false
    document.getElementById("homeButton").style.backgroundColor = "#BFBAB5";
    document.getElementById("paymentsButton").style.backgroundColor = "#E7E3DF";
    this.router.navigate(['ChooseService']);
  }

  goToProfile() {
    this.router.navigate(['UserDetails']);
  }

  checkPayments() {
    if (localStorage.getItem("USERNAME") && localStorage.getItem("TOKEN")) {
      this.homeButtonSelected = false;
      this.paymentsButtonSelected = true
      document.getElementById("homeButton").style.backgroundColor = "#E7E3DF";
      document.getElementById("paymentsButton").style.backgroundColor = "#BFBAB5";
      this.router.navigate(['paymentAlert']);
    }
    else {
      alert("Please login to access payments!");
    }
  }
}

