import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopAllGamesComponent } from './gop-all-games.component';

describe('GopAllGamesComponent', () => {
  let component: GopAllGamesComponent;
  let fixture: ComponentFixture<GopAllGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopAllGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopAllGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
