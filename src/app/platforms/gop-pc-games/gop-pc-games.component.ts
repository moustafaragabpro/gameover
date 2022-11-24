import { Component, OnInit } from '@angular/core';
import { GosGamesService } from 'src/app/services/gos-games.service';

@Component({
  selector: 'app-gop-pc-games',
  templateUrl: './gop-pc-games.component.html',
  styleUrls: ['./gop-pc-games.component.scss']
})
export class GopPcGamesComponent implements OnInit {
  gamesList :any= [];
  displayedGames = [];

  constructor(private _GosGamesService : GosGamesService ) { }


  ngOnInit(): void {
    this._GosGamesService.getGamesByPlatform('pc').subscribe({
      next : data => {
        console.log(data)
        this.gamesList = data;
        this.displayedGames = this.gamesList.slice(0 , 15);
      }
    })
  }

}
