import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
  //private baseUrl = 'http://10.0.2.2:8080/v1';
  //private baseUrl = 'http://localhost:8080/v1';
  //private baseUrl = 'http://192.168.1.4:8080/v1';

  user: User = new User();

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<Object> {
    this.user.email = email;
    this.user.password = password;
    this.user.username = email;

    return this.http.post(`${this.baseUrl}/register`, this.user);
  }
}
