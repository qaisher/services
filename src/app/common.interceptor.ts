import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const API_KEY = 'mykey';
    const page = '1';
    const limit = '5';
 
    
    
    return next.handle(request.clone({setHeaders: {API_KEY, 'app-id': '630a758491b126acb900b768'}, setParams: {page, limit}})).pipe(
      
      
    );

  }
}
