import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
  //private baseUrl = 'http://localhost:8080/v1';
  //private baseUrl = 'http://10.0.2.2:8080/v1';
  //private baseUrl = 'http://192.168.1.4:8080/v1';

  constructor(private http: HttpClient) { }

  createPayment(payment: Payment, aidId: number): Observable<Object> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.post(`${this.baseUrl}/addPayment/${aidId}`, payment, { headers });
  }
}
