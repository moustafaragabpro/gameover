import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopRelevanceComponent } from './gop-relevance.component';

describe('GopRelevanceComponent', () => {
  let component: GopRelevanceComponent;
  let fixture: ComponentFixture<GopRelevanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopRelevanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopRelevanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
