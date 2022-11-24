import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GolLayoutComponent } from './gol-layout/gol-layout.component';
import { GopLoginComponent } from './gop-login/gop-login.component';
import { GopSignupComponent } from './gop-signup/gop-signup.component';
import { GopHomeComponent } from './gop-home/gop-home.component';
import { GopAllGamesComponent } from './gop-all-games/gop-all-games.component';
import { GopReleaseDateComponent } from './sortby/gop-release-date/gop-release-date.component';
import { GopPopularityComponent } from './sortby/gop-popularity/gop-popularity.component';
import { GopAlphabeticalComponent } from './sortby/gop-alphabetical/gop-alphabetical.component';
import { GopRelevanceComponent } from './sortby/gop-relevance/gop-relevance.component';
import { GopRacingComponent } from './categories/gop-racing/gop-racing.component';
import { GopSportsComponent } from './categories/gop-sports/gop-sports.component';
import { GopSocialComponent } from './categories/gop-social/gop-social.component';
import { GopShooterComponent } from './categories/gop-shooter/gop-shooter.component';
import { GopOpenWorldComponent } from './categories/gop-open-world/gop-open-world.component';
import { GopZombieComponent } from './categories/gop-zombie/gop-zombie.component';
import { GopFantasyComponent } from './categories/gop-fantasy/gop-fantasy.component';
import { GopActionRpgComponent } from './categories/gop-action-rpg/gop-action-rpg.component';
import { GopActionComponent } from './categories/gop-action/gop-action.component';
import { GopFlightComponent } from './categories/gop-flight/gop-flight.component';
import { GopBattleRoyaleComponent } from './categories/gop-battle-royale/gop-battle-royale.component';
import { GocNavbarComponent } from './gol-layout/goc-navbar/goc-navbar.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DisplayGamesComponent } from './components/display-games/display-games.component';
import { GocLoadingScreenComponent } from './components/goc-loading-screen/goc-loading-screen.component';
import { GopPcGamesComponent } from './platforms/gop-pc-games/gop-pc-games.component';
import { GopBrowserGamesComponent } from './platforms/gop-browser-games/gop-browser-games.component';


@NgModule({
  declarations: [
    AppComponent,
    GolLayoutComponent,
    GopLoginComponent,
    GopSignupComponent,

    //
    GopHomeComponent,
    GopAllGamesComponent,

    //
    GopPcGamesComponent ,
    GopBrowserGamesComponent,

    //
    GopReleaseDateComponent,
    GopPopularityComponent,
    GopAlphabeticalComponent,
    GopRelevanceComponent,

    //
    GopRacingComponent,
    GopSportsComponent,
    GopSocialComponent,
    GopShooterComponent,
    GopOpenWorldComponent,
    GopZombieComponent,
    GopFantasyComponent,
    GopActionRpgComponent,
    GopActionComponent,
    GopFlightComponent,
    GopBattleRoyaleComponent,

    //
    GocNavbarComponent,
    DisplayGamesComponent,
    GameDetailsComponent,
    GocLoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule ,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
