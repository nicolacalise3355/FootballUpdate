import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueSelectedService } from 'src/app/core/services/league-selected/league-selected.service';
import { RankingService } from '../../services/ranking.service';
import { LeagueItem } from '../../interfaces/league.interfaces';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit{

  idCountry: number = 0;
  countryName: string = '';
  leagueItem: LeagueItem | undefined;

  constructor(
    private route: ActivatedRoute, 
    private leagueSelectedService: LeagueSelectedService,
    private rankingService: RankingService
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.idCountry = p['id'];
      this.leagueSelectedService.selectedProduct$.subscribe(l => {
          this.countryName = l.name ?? '';
      })
      this.rankingService.getStanding(p['id']).subscribe(res =>{
        console.log(res);
        
        if(res.errors.length === 0){
          this.leagueItem = res.response[0].league;
          console.log(this.leagueItem);
        }
      })
    })
  }

}
