import { Component, Input } from '@angular/core';
import { LeagueItem } from '../../interfaces/league.interfaces';

@Component({
  selector: 'app-table-ranking',
  templateUrl: './table-ranking.component.html',
  styleUrls: ['./table-ranking.component.css']
})
export class TableRankingComponent {

  @Input() leagueItem: LeagueItem | undefined;

  constructor(){}

}
