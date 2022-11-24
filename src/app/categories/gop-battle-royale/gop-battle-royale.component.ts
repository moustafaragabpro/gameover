import { Component, OnInit } from '@angular/core';
import { GosGamesService } from 'src/app/services/gos-games.service';

@Component({
  selector: 'app-gop-battle-royale',
  templateUrl: './gop-battle-royale.component.html',
  styleUrls: ['./gop-battle-royale.component.scss']
})
export class GopBattleRoyaleComponent implements OnInit {

  gamesList = [];
  displayedGames = [];

  constructor(private _GosGamesService : GosGamesService) { }

  ngOnInit(): void {
    this._GosGamesService.getGamesByCategory('battle-royale').subscribe({
      next : data => {
        this.gamesList = data;
        this.displayedGames = this.gamesList.slice(0 , 15);
      }
    })
  }


}
