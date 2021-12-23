import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticatedUserDetails } from '../authenticatedUserDetails';
import { User } from '../user';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  email: string;
  password: string;
  showSpinner: boolean = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  loginSuccess = true;
  submitted: boolean = false;
  authenticatedUserDetails: AuthenticatedUserDetails;
  user: User = new User();
  baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1/register';
  //baseUrl = 'http://10.0.2.2:8080/v1/register';
  //baseUrl = 'http://localhost:8080/v1/register';
  //baseUrl = 'http://localhost:4200/register';
  //baseUrl = 'http://192.168.1.4:8080/v1/register';

  ngOnInit(): void {
    document.getElementById("profilePic").style.visibility = "hidden";
    if (localStorage.getItem("USERNAME") && localStorage.getItem("USERID") && localStorage.getItem("TOKEN")) {
      this.user.email = localStorage.getItem("USERNAME"); //email and username are same
      this.user.userId = parseInt(localStorage.getItem("USERID"));
      this.user.username = localStorage.getItem("USERNAME");
      this.goToChoices();
    }
  }

  login() {
    this.showSpinner = true;
    document.getElementById("loginDiv").style.opacity = "0.5";
    document.getElementById("headerDiv").style.opacity = "0.5"
    this.loginService.login(this.email, this.password).subscribe(result => {
      if (result) {
        this.authenticatedUserDetails = result;
        console.log(this.authenticatedUserDetails.token);
        this.showSpinner = false;
        document.getElementById("loginDiv").style.opacity = "1";
        localStorage.setItem("TOKEN", this.authenticatedUserDetails.token);
        localStorage.setItem("USERNAME", this.email);
        localStorage.setItem("USERID", this.authenticatedUserDetails.userId.toString());
        this.user.email = this.email;
        this.user.userId = this.authenticatedUserDetails.userId;
        this.user.username = this.email;
        this.goToChoices();
      }

    },
      error => {
        this.loginSuccess = false;
        this.showSpinner = false;
        document.getElementById("loginDiv").style.opacity = "1";
        document.getElementById("headerDiv").style.opacity = "1";

      });
  }

  goToHouses() {
    this.router.navigate([`/${this.email}/getAllHousesForUser`], { state: { user: this.user } });
  }

  goToChoices() {
    document.getElementById("profilePic").style.visibility = "visible";
    this.router.navigate(["/ChooseService"], { state: { user: this.user } });
  }

  register() {
    this.goToRegister();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
