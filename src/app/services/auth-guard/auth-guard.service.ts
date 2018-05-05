import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.auth.getCurrentUserDetails()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
