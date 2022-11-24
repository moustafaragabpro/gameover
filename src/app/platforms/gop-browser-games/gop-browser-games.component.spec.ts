import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopBrowserGamesComponent } from './gop-browser-games.component';

describe('GopBrowserGamesComponent', () => {
  let component: GopBrowserGamesComponent;
  let fixture: ComponentFixture<GopBrowserGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopBrowserGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopBrowserGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
