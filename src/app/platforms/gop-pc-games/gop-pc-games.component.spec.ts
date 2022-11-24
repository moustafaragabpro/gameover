import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopPcGamesComponent } from './gop-pc-games.component';

describe('GopPcGamesComponent', () => {
  let component: GopPcGamesComponent;
  let fixture: ComponentFixture<GopPcGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopPcGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopPcGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
