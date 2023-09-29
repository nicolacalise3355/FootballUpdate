import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { League } from '../../interfaces/leagues.models';
import { leagues } from '../../constants/leagues';

@Injectable({
  providedIn: 'root'
})
export class LeagueSelectedService {
  private league$ = new BehaviorSubject<League>({});
  selectedLeague$ = this.league$.asObservable();
  constructor() {}

  setLeague(league: League) {
    this.league$.next(league);
  }

  setLeagueByKey(id: number){
    this.setLeague(leagues.find(obj =>{
      return obj.id === id;
    }) ?? {})
  }
}
