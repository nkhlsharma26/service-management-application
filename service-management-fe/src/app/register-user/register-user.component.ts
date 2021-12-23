import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService) { }

  email: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  registrationSuccess = false;
  submitted: boolean = false;
  showSpinner: boolean = false;

  ngOnInit(): void {
  }

  register() {
    document.getElementById("registerDiv").style.opacity = "0.5";
    document.getElementById("headerDiv").style.opacity = "0.5";
    this.submitted = true;
    this.showSpinner = true;
    this.registerService.register(this.email, this.password).subscribe((result) => {
      if (result) {
        console.log(result)
        this.registrationSuccess = true;
        this.successMessage = 'Registration Successful.';
        this.showSpinner = false;
        document.getElementById("registerDiv").style.opacity = "1";
        document.getElementById("headerDiv").style.opacity = "1";
        this.router.navigate(['/login']);
      }
    }, () => {
      document.getElementById("registerDiv").style.opacity = "1"
      document.getElementById("headerDiv").style.opacity = "1";
      this.registrationSuccess = false;
      this.showSpinner = false;
      this.submitted = false
    });
  }

}
