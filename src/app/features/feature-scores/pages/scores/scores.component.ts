import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoresService } from '../../service/scores.service';
import { LeagueSelectedService } from 'src/app/core/services/league-selected/league-selected.service';
import { ScoreFixture } from '../../interfaces/scores.interfaces';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit{

  idTeam: number = 0;
  error: boolean = false;
  scores: ScoreFixture[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private scoresService: ScoresService,
    private leagueSelectedService: LeagueSelectedService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.idTeam = p['id']; 
      this.scoresService.getScores(p['id']).subscribe(res =>{
        console.log(res);
        if(res.errors.length === 0){
          this.scores = res.response;
          console.log(this.scores);
        }else{
          this.error = true;
        }
      })
    })
  }

  onClickBack(){
    this.leagueSelectedService.selectedLeague$.subscribe(res => {
      console.log(res);
      this.router.navigate(['/ranking', res.key]);
    })
  }

}
