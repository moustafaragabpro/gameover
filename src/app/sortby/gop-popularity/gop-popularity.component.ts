import { Component, OnInit } from '@angular/core';
import { GosGamesService } from 'src/app/services/gos-games.service';

@Component({
  selector: 'app-gop-popularity',
  templateUrl: './gop-popularity.component.html',
  styleUrls: ['./gop-popularity.component.scss']
})
export class GopPopularityComponent implements OnInit {

  gamesList = [];
  displayedGames = [];

  constructor(private _GosGamesService : GosGamesService) { }

  ngOnInit(): void {
    this._GosGamesService.getSortedGames('popularity').subscribe({
      next : data => {
        this.gamesList = data;
        this.displayedGames = this.gamesList.slice(0 , 15);
      }
    })
  }

}
