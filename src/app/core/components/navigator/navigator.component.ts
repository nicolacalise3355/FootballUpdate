import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { League } from '../../interfaces/leagues.models';
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit{

  @Output() onClickTab = new EventEmitter<League>();
  @Input() leagues: League[] = [];
  @Input() leagueSelected: League = {};

  constructor(){}

  ngOnInit(): void {
  }

  onClickOnTab(index: number){
    this.leagueSelected = this.leagues[index];
    this.onClickTab.emit(this.leagues[index])
  }

}
