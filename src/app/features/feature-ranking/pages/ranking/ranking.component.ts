import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueSelectedService } from '../../../../core/services/league-selected/league-selected.service';
import { RankingService } from '../../services/ranking.service';
import { LeagueItem, Standing } from '../../interfaces/league.interfaces';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit{

  idCountry: number = 0;
  countryName: string = '';
  stands: Standing[] = [];
  error: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private leagueSelectedService: LeagueSelectedService,
    private rankingService: RankingService
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.idCountry = p['id'];
      this.rankingService.getStanding(p['id']).subscribe(res =>{
        if(res.errors.length === 0){
          this.leagueSelectedService.selectedLeague$.subscribe(l => {
            this.countryName = l.name ?? res.response[0].league.country;
            if(Object.keys(l).length === 0) this.leagueSelectedService.setLeague({ id: res.response[0].league.id, name: res.response[0].league.country })
          })
        this.stands = res.response[0].league.standings[0];
        }else{
          this.error = true;
        }
      })
    })
  }

}
