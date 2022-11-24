import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GopActionRpgComponent } from './categories/gop-action-rpg/gop-action-rpg.component';
import { GopActionComponent } from './categories/gop-action/gop-action.component';
import { GopBattleRoyaleComponent } from './categories/gop-battle-royale/gop-battle-royale.component';
import { GopFantasyComponent } from './categories/gop-fantasy/gop-fantasy.component';
import { GopFlightComponent } from './categories/gop-flight/gop-flight.component';
import { GopOpenWorldComponent } from './categories/gop-open-world/gop-open-world.component';
import { GopRacingComponent } from './categories/gop-racing/gop-racing.component';
import { GopShooterComponent } from './categories/gop-shooter/gop-shooter.component';
import { GopSocialComponent } from './categories/gop-social/gop-social.component';
import { GopSportsComponent } from './categories/gop-sports/gop-sports.component';
import { GopZombieComponent } from './categories/gop-zombie/gop-zombie.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';

import { GopAllGamesComponent } from './gop-all-games/gop-all-games.component';
import { GopHomeComponent } from './gop-home/gop-home.component';
import { GopLoginComponent } from './gop-login/gop-login.component';
import { GopSignupComponent } from './gop-signup/gop-signup.component';
import { GopBrowserGamesComponent } from './platforms/gop-browser-games/gop-browser-games.component';
import { GopPcGamesComponent } from './platforms/gop-pc-games/gop-pc-games.component';
import { GogAuthGuard } from './services/gog-auth.guard';
import { GopAlphabeticalComponent } from './sortby/gop-alphabetical/gop-alphabetical.component';
import { GopPopularityComponent } from './sortby/gop-popularity/gop-popularity.component';
import { GopReleaseDateComponent } from './sortby/gop-release-date/gop-release-date.component';
import { GopRelevanceComponent } from './sortby/gop-relevance/gop-relevance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', canActivate: [GogAuthGuard], component: GopHomeComponent },
  { path: 'all', canActivate: [GogAuthGuard], component: GopAllGamesComponent },
  { path: 'login', component: GopLoginComponent },
  { path: 'signup', component: GopSignupComponent },

  {
    path: 'plateform',
    children: [
      {
        path: 'pc',
        canActivate: [GogAuthGuard],
        component: GopPcGamesComponent,
      },
      {
        path: 'browser',
        canActivate: [GogAuthGuard],
        component: GopBrowserGamesComponent,
      },
    ],
  },

  {
    path: 'sort-by',
    children: [
      {
        path: 'release-date',
        canActivate: [GogAuthGuard],
        component: GopReleaseDateComponent,
      },
      {
        path: 'popularity',
        canActivate: [GogAuthGuard],
        component: GopPopularityComponent,
      },
      {
        path: 'alphabetical',
        canActivate: [GogAuthGuard],
        component: GopAlphabeticalComponent,
      },
      {
        path: 'relevance',
        canActivate: [GogAuthGuard],
        component: GopRelevanceComponent,
      },
    ],
  },

  {
    path: 'categories',
    children: [
      {
        path: 'racing',
        canActivate: [GogAuthGuard],
        component: GopRacingComponent,
      },
      {
        path: 'sports',
        canActivate: [GogAuthGuard],
        component: GopSportsComponent,
      },
      {
        path: 'social',
        canActivate: [GogAuthGuard],
        component: GopSocialComponent,
      },
      {
        path: 'shooter',
        canActivate: [GogAuthGuard],
        component: GopShooterComponent,
      },
      {
        path: 'open-world',
        canActivate: [GogAuthGuard],
        component: GopOpenWorldComponent,
      },
      {
        path: 'zombie',
        canActivate: [GogAuthGuard],
        component: GopZombieComponent,
      },
      {
        path: 'fantasy',
        canActivate: [GogAuthGuard],
        component: GopFantasyComponent,
      },
      {
        path: 'action-rpg',
        canActivate: [GogAuthGuard],
        component: GopActionRpgComponent,
      },
      {
        path: 'action',
        canActivate: [GogAuthGuard],
        component: GopActionComponent,
      },
      {
        path: 'flight',
        canActivate: [GogAuthGuard],
        component: GopFlightComponent,
      },
      {
        path: 'battle-royale',
        canActivate: [GogAuthGuard],
        component: GopBattleRoyaleComponent,
      },
    ],
  },

  {
    path: 'game-details/:gameId',
    canActivate: [GogAuthGuard],
    component: GameDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
