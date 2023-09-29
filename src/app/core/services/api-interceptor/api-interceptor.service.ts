import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/app/environment';
import { HttpCacheService } from '../http-cache/http-cache.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor{

  constructor(private cacheService: HttpCacheService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.method === 'GET') {
      const cache = this.cacheService.get(request.urlWithParams);
      console.log(request.urlWithParams);
      console.log(cache);
      
      if (cache) {
        console.log("inside");
        
        return of(new HttpResponse({ body: cache }));
      }
    }

    request = request.clone({
      setHeaders: {
        "x-rapidapi-key": environment.appIdKey,
        "x-rapidapi-host": environment.baseUrl,
      }
    });

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cacheService.set(request.urlWithParams, event.body, 30000);
        }
      })
    );
  }
}
