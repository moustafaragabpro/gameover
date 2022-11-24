import { Component, OnInit } from '@angular/core';
import { GosGamesService } from 'src/app/services/gos-games.service';

@Component({
  selector: 'app-gop-action-rpg',
  templateUrl: './gop-action-rpg.component.html',
  styleUrls: ['./gop-action-rpg.component.scss']
})
export class GopActionRpgComponent implements OnInit {

  gamesList = [];
  displayedGames = [];

  constructor(private _GosGamesService : GosGamesService) { }

  ngOnInit(): void {
    this._GosGamesService.getGamesByCategory('action-rpg').subscribe({
      next : data => {
        this.gamesList = data;
        this.displayedGames = this.gamesList.slice(0 , 15);
      }
    })
  }


}
