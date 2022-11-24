import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolLayoutComponent } from './gol-layout.component';

describe('GolLayoutComponent', () => {
  let component: GolLayoutComponent;
  let fixture: ComponentFixture<GolLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
