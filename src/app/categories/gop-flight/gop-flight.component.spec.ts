import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopFlightComponent } from './gop-flight.component';

describe('GopFlightComponent', () => {
  let component: GopFlightComponent;
  let fixture: ComponentFixture<GopFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
