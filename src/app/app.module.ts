import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RankingComponent } from './features/feature-ranking/pages/ranking/ranking.component';
import { HomepageComponent } from './features/global/pages/homepage/homepage.component';
import { ScoresComponent } from './features/feature-scores/pages/scores/scores.component';
import { NavigatorComponent } from './core/components/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RankingComponent,
    HomepageComponent,
    ScoresComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
