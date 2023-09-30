import { Injectable } from '@angular/core';
import { GenericApiResponse } from '../../interfaces/global-api.models';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private cache: { [key: string]: Map<string, { data: GenericApiResponse; exp: number }>; } = {
    standings: new Map<string, { data: GenericApiResponse; exp: number }>(),
    fixtures: new Map<string, { data: GenericApiResponse; exp: number }>()
  }  

  constructor() {}

  set(key: string, value: any, ttl: number = 30000, path: string): void {
    const expirationTime = Date.now() + ttl;
    this.cache[path].set(key, { data: value, exp: expirationTime });
  }

  get(key: string, path: string): any {
    const cacheItem = this.cache[path].get(key);

    if (cacheItem && cacheItem.exp > Date.now()) {
      return cacheItem.data;
    } else {
      this.cache[path].delete(key);
      return null;
    }
  }

}
