import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoresService } from '../../service/scores.service';
import { ScoreApiResponse, ScoreFixture } from '../../interfaces/scores.interfaces';
import { findIdByName } from '../../../../core/constants/leagues';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit{

  idTeam: number = 0;
  error: boolean = false;
  scores: ScoreFixture[] = [];
  countryId: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private scoresService: ScoresService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.idTeam = p['id']; 
      this.scoresService.getScores(p['id']).subscribe((res: ScoreApiResponse) =>{
        if(res.errors.length === 0){
          this.scores = res.response;
          console.log(res);
          
          this.countryId = findIdByName(res.response[0].league.country);
        }else{
          this.error = true;
        }
      })
    })
  }

  onClickBack(){
    this.router.navigate(['/ranking', this.countryId]);
  }

}
