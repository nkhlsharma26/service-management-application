import { Injectable } from '@angular/core';
import { Expanse } from './expanse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpanseService {
  private baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1/dem';
  //private baseUrl = 'http://10.0.2.2:8080/v1/dem';
  //private baseUrl = 'http://localhost:8080/v1/dem';
  //private baseUrl = 'http://192.168.1.4:8080/v1/dem';
  //private baseUrl = 'http://localhost:8080/v1/dem';

  constructor(private http: HttpClient) { }

  createExpanse(expanse: Expanse): Observable<any> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.post(`${this.baseUrl}/addExpanse`, expanse, { headers });
  }

  getExpanseListForUser(username: String): Observable<any> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.get(`${this.baseUrl}/getAllExpanses/${username}`, { headers });
  }
}
