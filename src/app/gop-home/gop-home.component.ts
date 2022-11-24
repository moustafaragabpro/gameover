import { Component, OnInit } from '@angular/core';
import { GosGamesService } from './../services/gos-games.service';

@Component({
  selector: 'app-gop-home',
  templateUrl: './gop-home.component.html',
  styleUrls: ['./gop-home.component.scss']
})
export class GopHomeComponent implements OnInit {
  gamesList = [];
  constructor(private _GosGamesService : GosGamesService) { }

  ngOnInit(): void {
    this._GosGamesService.getSortedGames('popularity').subscribe({
      next : data => {
        this.gamesList = data.slice(0,3);
        console.log(this.gamesList)
      }
    })
  }

}
