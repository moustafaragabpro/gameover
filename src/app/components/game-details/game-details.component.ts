import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GosGamesService } from 'src/app/services/gos-games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  gameDetails : any = null;
  constructor(private _ActivatedRoute : ActivatedRoute , private _GosGamesService : GosGamesService) {}


  ngOnInit(): void {
    const {gameId} = this._ActivatedRoute.snapshot.params ;
    this._GosGamesService.getGameDetails(gameId).subscribe({
      next : data => {
        this.gameDetails = data
      }
    })
  }
}
