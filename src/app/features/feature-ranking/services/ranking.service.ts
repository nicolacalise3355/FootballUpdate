import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { StandingsApiResponse } from '../interfaces/league.interfaces';

import { environment } from 'src/app/environment';
import { ApiEndpoints } from 'src/app/core/enums/api-path';
import { DateService } from 'src/app/core/services/date/date.service';
@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private apiGetStandings: string = `${environment.baseUrl}${ApiEndpoints.standings}`;

  constructor(private http: HttpClient, private date: DateService) { }

  getStanding(id: number): Observable<StandingsApiResponse>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('league', id);
    queryParams = queryParams.append('season', this.date.getCurrentYear());
    return this.http.get<StandingsApiResponse>(this.apiGetStandings, { params: queryParams })
  }

}
