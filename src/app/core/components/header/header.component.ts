import { Component, OnInit } from '@angular/core';

import { leagues } from '../../constants/leagues';
import { League } from '../../interfaces/leagues.models';
import { LeagueSelectedService } from '../../services/league-selected/league-selected.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  countryLeagues: League[] = leagues;
  leagueSelected: League = {};

  constructor(private leagueSelectedService: LeagueSelectedService, private router: Router){}

  onClickNavigator($event: League){
    this.leagueSelectedService.setLeague($event)
    this.router.navigate(['/ranking', $event.id]);
  }

}
