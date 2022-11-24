import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopBattleRoyaleComponent } from './gop-battle-royale.component';

describe('GopBattleRoyaleComponent', () => {
  let component: GopBattleRoyaleComponent;
  let fixture: ComponentFixture<GopBattleRoyaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopBattleRoyaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopBattleRoyaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
