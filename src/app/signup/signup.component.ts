import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from '../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private SignupServices: SignupService) { }

  ngOnInit() {
  }

  onsubmit(user) {
    const { email, password, confirmPassword } = user;
    if (!email.trim()) {
      return console.log('Email field is compulsory');
    }
    if (!password.trim()) {
      return console.log('Password field is compulsory');
    }
    if (!confirmPassword.trim()) {
      return console.log('You must confirm your password');
    }
    if (password !== confirmPassword) {
      return console.log('passowrds do not match');
    }

    this.SignupServices.signup(user)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
