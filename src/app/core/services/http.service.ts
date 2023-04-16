import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user.model';
import { config } from '../../core/constants/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
  ) { }

  public postRequest(model:string, body:any):Observable<User>{

    return this.http.post<User>(config.API_URL + 'user', body, { headers: this.headers });
  }

  public authRegister(body:any):Observable<any>{
    return this.http.post(config.API_URL + 'user', body, { headers: this.headers });
  }

  public authLogin(password:string, userValue:string):Observable<any>{
    const body = {
      value: userValue,
      password: password
    }
    return this.http.post(config.API_URL + 'user/login', body, { headers: this.headers });
  }
}
