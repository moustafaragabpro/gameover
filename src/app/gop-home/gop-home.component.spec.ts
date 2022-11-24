import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopHomeComponent } from './gop-home.component';

describe('GopHomeComponent', () => {
  let component: GopHomeComponent;
  let fixture: ComponentFixture<GopHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
