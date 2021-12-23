import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user: User;
  pageTitle: string;
  showSpinner: boolean;

  ngOnInit(): void {
    this.user = new User();
    document.getElementById("userDetail").style.opacity = "0.5";
    document.getElementById("headerDiv").style.opacity = "0.5";
    this.showSpinner = true;
    this.getUserDetails();
  }

  private getUserDetails() {
    this.userService.getUserDetails()
      .subscribe(data => {
        if (data) {
          document.getElementById("userDetail").style.opacity = "1";
          document.getElementById("headerDiv").style.opacity = "1";
          this.showSpinner = false;
          console.log(data);
          this.user = data;
          this.pageTitle = `${this.user.username}`;
          document.getElementById("userPic").innerHTML = this.user.username.slice(0, 2).toUpperCase();
        }

      }, error => console.log(error));
  }

  logout() {
    localStorage.removeItem("USERID");
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("TOKEN");
    this.router.navigate([""]);
  }
}
