import { TestBed } from '@angular/core/testing';

import { GosAuthService } from './gos-auth.service';

describe('GosAuthService', () => {
  let service: GosAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GosAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
