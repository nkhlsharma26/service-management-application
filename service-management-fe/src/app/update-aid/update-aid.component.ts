import { Component, OnInit } from '@angular/core';
import { AidService } from '../aid.service';
import { Router } from '@angular/router';
import { Aid } from '../aid';

@Component({
  selector: 'app-update-aid',
  templateUrl: './update-aid.component.html',
  styleUrls: ['./update-aid.component.css']
})
export class UpdateAidComponent implements OnInit {

  aid: Aid = new Aid();
  pageTitle: string;
  submitted: boolean = false;
  isValid: boolean = true;
  updateClicked = false;
  validationMessage = "* marked fields are mandatory."
  constructor(private aidService: AidService,
    private router: Router) { }

  ngOnInit(): void {
    this.aid = history.state.aid;
    this.pageTitle = `${this.aid.name}`;
  }

  onSubmit() {
    if (this.aid.name && this.aid.endDate && this.aid.costOfService) {
      this.isValid = true;
      this.updateAid();
    }
    else {
      this.isValid = false;
      return false;
    }

  }

  updateAid() {
    this.updateClicked = true;
    document.getElementById("updateDiv").style.opacity = "0.5";
    document.getElementById("headerDiv").style.opacity = "0.5"
    this.aidService.updateAid(this.aid.house.houseId, this.aid)
      .subscribe(data => {
        console.log(data);
        this.aid = data;
        this.submitted = true;
        this.gotoList();
      }, error => console.log(error));
  }

  gotoList() {
    document.getElementById("updateDiv").style.opacity = "1";
    document.getElementById("headerDiv").style.opacity = "1";
    this.router.navigate(['/showAid'], { state: { aid: this.aid } });
  }

  cancel() {
    this.router.navigate(['/showAid'], { state: { aid: this.aid } });
  }

}
