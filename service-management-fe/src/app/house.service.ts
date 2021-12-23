import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
  //private baseUrl = 'http://localhost:8080/v1';
  //private baseUrl = 'http://10.0.2.2:8080/v1';
  //private baseUrl = 'http://192.168.1.4:8080/v1';

  constructor(private http: HttpClient) { }

  getHouse(id: number): Observable<any> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.get(`${this.baseUrl}/${id}`, { headers });
  }

  createHouse(house: Object, user: User): Observable<Object> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.post(`${this.baseUrl}/${user.userId}/addHouse`, house, { headers });
  }

  //updateHouse(id: number, value: any): Observable<Object> {
  // return this.http.put(`${this.baseUrl}/${id}`, value);
  //}

  /*deleteHouse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/

  getHousesList(): Observable<any> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    var username: string = localStorage.getItem("USERNAME");
    return this.http.get(`${this.baseUrl}/${username}/getAllHousesForUser`, { headers });
  }
}

