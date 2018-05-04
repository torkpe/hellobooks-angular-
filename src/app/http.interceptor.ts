import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('user_token')) {
        const authReq = req.clone({
            headers: req.headers.set('api_token', localStorage.getItem('user_token'))
        });
        return next.handle(authReq);
    }
    return next.handle(req);
  }
}
