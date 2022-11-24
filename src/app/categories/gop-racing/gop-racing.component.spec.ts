import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopRacingComponent } from './gop-racing.component';

describe('GopRacingComponent', () => {
  let component: GopRacingComponent;
  let fixture: ComponentFixture<GopRacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopRacingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopRacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
