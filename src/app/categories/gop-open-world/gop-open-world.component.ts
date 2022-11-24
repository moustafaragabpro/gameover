import { Component, OnInit } from '@angular/core';
import { GosGamesService } from 'src/app/services/gos-games.service';

@Component({
  selector: 'app-gop-open-world',
  templateUrl: './gop-open-world.component.html',
  styleUrls: ['./gop-open-world.component.scss']
})
export class GopOpenWorldComponent implements OnInit {

  gamesList = [];
  displayedGames = [];

  constructor(private _GosGamesService : GosGamesService) { }

  ngOnInit(): void {
    this._GosGamesService.getGamesByCategory('open-world').subscribe({
      next : data => {
        this.gamesList = data;
        this.displayedGames = this.gamesList.slice(0 , 15);

      }
    })
  }
}
