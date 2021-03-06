import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { EventEmitterService } from '../services/event/event.emitter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  isLoggedIn = false;
  constructor(private auth: AuthService,
    private eventEmitter: EventEmitterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.auth.getCurrentUserDetails();
    this.eventEmitter.emitLogin.subscribe(
      (isLoggedIn) => this.isLoggedIn = isLoggedIn,
    );
  }

  logOut() {
    this.isLoggedIn = false;
    this.user = this.auth.logOut();
    return  this.router.navigate(['/login']);
  }
}
