import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-games',
  templateUrl: './display-games.component.html',
  styleUrls: ['./display-games.component.scss'],
})
export class DisplayGamesComponent implements OnInit  {
  @Input() containerClass: string = 'py-5 mt-5';
  @Input() games : any= [];
  @Input() displayedGames : any = [];

  loadMoreBtn: boolean = true ;

  constructor() {}

  ngOnInit(): void {
  }

  loadMore() {
    let showedGamesCount : number = this.displayedGames?.length ;

      showedGamesCount += 15 ;
      this.displayedGames = this.games.slice(0 , showedGamesCount);

      if(showedGamesCount > this.games?.length) this.loadMoreBtn = false ;

  }
}

