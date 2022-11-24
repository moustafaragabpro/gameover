import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopSportsComponent } from './gop-sports.component';

describe('GopSportsComponent', () => {
  let component: GopSportsComponent;
  let fixture: ComponentFixture<GopSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopSportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
