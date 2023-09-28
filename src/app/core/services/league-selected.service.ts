import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { League } from '../interfaces/leagues.models';

@Injectable({
  providedIn: 'root'
})
export class LeagueSelectedService {
  private league$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.league$.asObservable();
  constructor() {}

  setProduct(league: League) {
    this.league$.next(league);
  }
}
