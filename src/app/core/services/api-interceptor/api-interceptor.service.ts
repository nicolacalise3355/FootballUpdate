import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../../../environment';
import { HttpCacheService } from '../http-cache/http-cache.service';
import { GenericApiResponse } from '../../interfaces/global-api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor{

  constructor(private cacheService: HttpCacheService) { }

  findRequestPath(url: string){
    const match = url.match(/\/([^/]+)\/?$/);
    if (match && match[1]) {
        return match[1];
    }
    return '';
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<GenericApiResponse>> {

    const requestPath = this.findRequestPath(request.url);

    if (request.method === 'GET') {
      const cache = this.cacheService.get(request.urlWithParams, requestPath);
      if (cache) {
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
          this.cacheService.set(request.urlWithParams, event.body, 30000, requestPath);
        }
      })
    );
  }
}
