import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopPopularityComponent } from './gop-popularity.component';

describe('GopPopularityComponent', () => {
  let component: GopPopularityComponent;
  let fixture: ComponentFixture<GopPopularityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopPopularityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopPopularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
