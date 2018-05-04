import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(userDetails) {
    return this.http.post('http://localhost:8001/api/v1/login', userDetails);
  }
}
