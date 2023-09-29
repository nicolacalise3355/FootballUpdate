import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndpoints } from '../../../core/enums/api-path';
import { environment } from '../../../environment';
import { ScoreApiResponse } from '../interfaces/scores.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private apiGetScores: string = `${environment.baseUrl}${ApiEndpoints.scores}`;

  constructor(private http: HttpClient) { }

  getScores(id: number): Observable<ScoreApiResponse>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('team', id);
    queryParams = queryParams.append('last', 10);
    return this.http.get<ScoreApiResponse>(this.apiGetScores, { params: queryParams })
  }

}
