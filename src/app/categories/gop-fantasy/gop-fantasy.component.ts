import { Component, OnInit } from '@angular/core';
import { GosGamesService } from 'src/app/services/gos-games.service';

@Component({
  selector: 'app-gop-fantasy',
  templateUrl: './gop-fantasy.component.html',
  styleUrls: ['./gop-fantasy.component.scss']
})
export class GopFantasyComponent implements OnInit {

  gamesList = [];
  displayedGames = [];

  constructor(private _GosGamesService : GosGamesService) { }

  ngOnInit(): void {
    this._GosGamesService.getGamesByCategory('fantasy').subscribe({
      next : data => {
        this.gamesList = data;
        this.displayedGames = this.gamesList.slice(0 , 15);
      }
    })
  }

}
