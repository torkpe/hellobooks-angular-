import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { EventEmitterService } from '../services/event/event.emitter.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  @Output() login = new EventEmitter();

  constructor(private Login: LoginService,
    private eventEmitter: EventEmitterService
  ) { }

  ngOnInit() {
  }
  onsubmit(userCredentials) {

    const { email, password, repeatPassword } = userCredentials;
    if (!email.trim()) {
      return console.log('Email field is compulsory');
    }
    if (!password.trim()) {
      return console.log('Password field is compulsory');
    }

    this.Login.login(userCredentials)
      .subscribe(
        response => {
          this.setAuthToken(response);
          this.eventEmitter.emitOnLogin();
        },
        error => console.log(error)
      );
  }

  setAuthToken(token) {
    localStorage.setItem('user_token', token.token);
  }
}
