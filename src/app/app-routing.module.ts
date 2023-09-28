import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './features/global/pages/homepage/homepage.component';
import { RankingComponent } from './features/feature-ranking/pages/ranking/ranking.component'; 
import { ScoresComponent } from './features/feature-scores/pages/scores/scores.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'ranking/:id', component: RankingComponent },
  { path: 'scores/:id', component: ScoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
