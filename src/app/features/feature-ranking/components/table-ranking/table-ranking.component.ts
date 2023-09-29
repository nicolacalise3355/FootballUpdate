import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LeagueItem, Standing, Team } from '../../interfaces/league.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-ranking',
  templateUrl: './table-ranking.component.html',
  styleUrls: ['./table-ranking.component.css']
})
export class TableRankingComponent implements OnInit, OnChanges{

  @Input() standings: Standing[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  clickOnTeam(team: Team){
    this.router.navigate(['/scores', team.id]);
  }

}
