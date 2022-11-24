import { Component, OnInit } from '@angular/core';
import { GosGamesService } from '../services/gos-games.service';

@Component({
  selector: 'app-gop-all-games',
  templateUrl: './gop-all-games.component.html',
  styleUrls: ['./gop-all-games.component.scss']
})
export class GopAllGamesComponent implements OnInit {
  gamesList = [];
  displayedGames = [];
  constructor(private _GosGamesService : GosGamesService) { }

  ngOnInit(): void {
    this._GosGamesService.getAllGames().subscribe({
      next : data => {
        this.gamesList = data;
        this.displayedGames = this.gamesList.slice(0 , 15);
      }
    })
  }

}
