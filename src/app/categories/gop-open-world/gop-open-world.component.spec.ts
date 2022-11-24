import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopOpenWorldComponent } from './gop-open-world.component';

describe('GopOpenWorldComponent', () => {
  let component: GopOpenWorldComponent;
  let fixture: ComponentFixture<GopOpenWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopOpenWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopOpenWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
