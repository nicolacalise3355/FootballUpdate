import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RankingComponent } from './features/feature-ranking/pages/ranking/ranking.component';
import { HomepageComponent } from './features/global/pages/homepage/homepage.component';
import { ScoresComponent } from './features/feature-scores/pages/scores/scores.component';
import { NavigatorComponent } from './core/components/navigator/navigator.component';

import { LeagueSelectedService } from './core/services/league-selected/league-selected.service';
import { TableRankingComponent } from './features/feature-ranking/components/table-ranking/table-ranking.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptorService } from './core/services/api-interceptor/api-interceptor.service';
import { DateService } from './core/services/date/date.service';
import { RankingService } from './features/feature-ranking/services/ranking.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RankingComponent,
    HomepageComponent,
    ScoresComponent,
    NavigatorComponent,
    TableRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [LeagueSelectedService, ApiInterceptorService, DateService, RankingService,{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
