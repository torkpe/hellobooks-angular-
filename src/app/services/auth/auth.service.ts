import { Injectable } from '@angular/core';

import * as jwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {
  userDetails = null;
  constructor() {}

  getCurrentUserDetails() {
    if (localStorage.getItem('user_token')) {
      const userCredentials = jwtDecode(localStorage.getItem('user_token'));
      const { id, role } = userCredentials.sub;
      return this.userDetails = { id, role };
    }
    return null;
  }

  logOut () {
    localStorage.removeItem('user_token');
  }
}
