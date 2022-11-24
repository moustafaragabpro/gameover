import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopFantasyComponent } from './gop-fantasy.component';

describe('GopFantasyComponent', () => {
  let component: GopFantasyComponent;
  let fixture: ComponentFixture<GopFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopFantasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
