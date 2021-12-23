import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { AuthenticatedUserDetails } from '../authenticatedUserDetails';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://Servicemanagement-env.eba-8uum3ycj.ap-south-1.elasticbeanstalk.com/v1';
  //private baseUrl = 'http://10.0.2.2:8080/v1';
  //private baseUrl = 'http://localhost:8080/v1';
  //private baseUrl = 'http://192.168.1.4:8080/v1';

  constructor(private http: HttpClient) { }

  user: User = new User();
  token: any;
  errorMessage: any;

  login(email: string, password: string): Observable<AuthenticatedUserDetails> {
    //var user: User = new User();
    this.user.username = email;
    this.user.password = password;
    return this.http.post<AuthenticatedUserDetails>(`${this.baseUrl}/authenticate`, this.user);
  }
}
