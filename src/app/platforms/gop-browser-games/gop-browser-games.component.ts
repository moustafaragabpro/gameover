import { Component, OnInit } from '@angular/core';
import { GosGamesService } from 'src/app/services/gos-games.service';

@Component({
  selector: 'app-gop-browser-games',
  templateUrl: './gop-browser-games.component.html',
  styleUrls: ['./gop-browser-games.component.scss']
})
export class GopBrowserGamesComponent implements OnInit {
  gamesList :any= [];
  displayedGames = [];

  constructor(private _GosGamesService : GosGamesService ) { }


  ngOnInit(): void {
    this._GosGamesService.getGamesByPlatform('browser').subscribe({
      next : data => {
        console.log(data)
        this.gamesList = data;
        this.displayedGames = this.gamesList.slice(0 , 15);
      }
    })
  }
}
