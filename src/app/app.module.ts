import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './http.interceptor';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';

import { SignupService } from './services/signup/signup.service';
import { LoginService } from './services/login/login.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { BooksService } from './services/books/books.service';
import { EventEmitterService } from './services/event/event.emitter.service';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { CreateBookComponent } from './books/create-book/create-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    BooksComponent,
    BookComponent,
    SingleBookComponent,
    CreateBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LandingPageComponent,

      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,

      },
      {
        path: 'books',
        component: BooksComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'books/:id',
        component: SingleBookComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'new-book',
        component: CreateBookComponent,
        canActivate: [AuthGuardService]
      },
    ])
  ],
  providers: [
    SignupService,
    LoginService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    BooksService,
    EventEmitterService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
