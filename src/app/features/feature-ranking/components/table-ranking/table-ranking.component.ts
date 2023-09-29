import { Component, Input, OnInit } from '@angular/core';
import { LeagueItem, Standing, Team } from '../../interfaces/league.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-ranking',
  templateUrl: './table-ranking.component.html',
  styleUrls: ['./table-ranking.component.css']
})
export class TableRankingComponent implements OnInit{

  @Input() leagueItem: LeagueItem | undefined;
  standings: Standing[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.standings = this.leagueItem?.standings[0] ?? [];
  }

  clickOnTeam(team: Team){
    this.router.navigate(['/scores', team.id]);
  }

}
