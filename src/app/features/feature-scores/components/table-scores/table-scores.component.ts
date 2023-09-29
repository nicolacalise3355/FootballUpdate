import { Component, Input } from '@angular/core';
import { ScoreFixture } from '../../interfaces/scores.interfaces';

@Component({
  selector: 'app-table-scores',
  templateUrl: './table-scores.component.html',
  styleUrls: ['./table-scores.component.css']
})
export class TableScoresComponent {

  @Input() scores: ScoreFixture[] = [];

}
