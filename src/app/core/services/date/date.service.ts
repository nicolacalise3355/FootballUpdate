import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getCurrentYear(): string {
    const currentYear = new Date().getFullYear();
    return currentYear.toString();
  }
}
