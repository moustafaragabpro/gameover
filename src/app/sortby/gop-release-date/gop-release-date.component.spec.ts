import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopReleaseDateComponent } from './gop-release-date.component';

describe('GopReleaseDateComponent', () => {
  let component: GopReleaseDateComponent;
  let fixture: ComponentFixture<GopReleaseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopReleaseDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopReleaseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
