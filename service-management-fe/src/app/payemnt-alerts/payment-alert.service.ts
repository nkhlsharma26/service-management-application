import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentAlertService {

  private baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
  //private baseUrl = 'http://10.0.2.2:8080/v1';
  //private baseUrl = 'http://localhost:8080/v1';
  //private baseUrl = 'http://192.168.1.4:8080/v1';

  constructor(private http: HttpClient) { }

  getMissedPayments(): Observable<Object> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    var userId = localStorage.getItem("USERID");
    return this.http.get(`${this.baseUrl}/getMissedPayments/${userId}`, { headers });
  }

  getPaymentNotification(): Observable<Object> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    var userId = localStorage.getItem("USERID");
    return this.http.get(`${this.baseUrl}/getPaymentNotification/${userId}`, { headers });
  }
}
