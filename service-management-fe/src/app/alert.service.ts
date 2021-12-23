import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts: string[];
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
  //private baseUrl = 'http://localhost:8080/v1';
  //private baseUrl = 'http://10.0.2.2:8080/v1';
  //private baseUrl = 'http://192.168.1.4:8080/v1';


  getMissedPaymentAlertsForUser(userId: string) {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    var userId: string = localStorage.getItem("USERID");
    alert("userId " + userId);
    return this.http.get(`${this.baseUrl}/getMissedPayments/${userId}`, { headers });
  }
}
