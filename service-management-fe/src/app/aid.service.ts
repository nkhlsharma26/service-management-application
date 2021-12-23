import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aid } from './aid';
import { House } from './house';

@Injectable({
  providedIn: 'root'
})
export class AidService {

  private baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
  //private baseUrl = 'http://10.0.2.2:8080/v1';
  //private baseUrl = 'http://localhost:8080/v1';
  //private baseUrl = 'http://192.168.1.4:8080/v1';

  constructor(private http: HttpClient) { }

  createAid(house: House, aid: Aid): Observable<Object> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.post(`${this.baseUrl}/${house.houseId}/addAid`, aid, { headers });
  }

  getAidList(house: House): Observable<any> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.get(`${this.baseUrl}/${house.houseId}/getAllAidsForHouse`, { headers });
  }

  getAid(aid: Aid): Observable<any> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.get(`${this.baseUrl}/getAid/${aid.aidId}`, { headers });
  }

  updateAid(houseId: number, aid: Aid): Observable<any> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem("TOKEN")}` };
    return this.http.put(`${this.baseUrl}/${houseId}/updateAid`, aid, { headers });
  }
}
