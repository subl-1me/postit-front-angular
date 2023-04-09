import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private headers: HttpHeaders
  ) { }

  public postRequest(model:string, body:any):Observable<any>{
    const headers = this.headers.set('Content-Type', 'application/json');

    return this.http.post<User>('http://localhost:3000/api/user', body, { headers: headers });
  }
}
