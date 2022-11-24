import { TestBed } from '@angular/core/testing';

import { GogAuthGuard } from './gog-auth.guard';

describe('GogAuthGuard', () => {
  let guard: GogAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GogAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
