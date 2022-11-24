import { TestBed } from '@angular/core/testing';

import { GosGamesService } from './gos-games.service';

describe('GosGamesService', () => {
  let service: GosGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GosGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
