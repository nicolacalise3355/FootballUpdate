import { Component, OnInit } from '@angular/core';

import { leagues } from '../../constants/leagues';
import { League } from '../../interfaces/leagues.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  countryLeagues: League[] = leagues;
  leagueSelected: League = {};

  ngOnInit(): void {
    this.leagueSelected = this.countryLeagues[0];
  }

  onClickNavigator($event: any){
    console.log("onClickNavigator", $event);
  }

}
