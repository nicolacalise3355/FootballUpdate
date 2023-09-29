import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private cache: Map<string, { data: any; exp: number }> = new Map();

  constructor() {}

  set(key: string, value: any, ttl: number = 30000): void {
    const expirationTime = Date.now() + ttl;
    this.cache.set(key, { data: value, exp: expirationTime });
  }

  get(key: string): any {
    const cacheItem = this.cache.get(key);

    if (cacheItem && cacheItem.exp > Date.now()) {
      return cacheItem.data;
    } else {
      this.cache.delete(key);
      return null;
    }
  }

  has(key: string): boolean {
    const cacheItem = this.cache.get(key);
    return !!cacheItem && cacheItem.exp > Date.now();
  }

  clear(): void {
    this.cache.clear();
  }
}
