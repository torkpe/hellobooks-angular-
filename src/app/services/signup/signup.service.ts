import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}
  signup(userDetails) {
    return this.http.post('http://localhost:8001/api/v1/users/signup', userDetails);
  }
}
