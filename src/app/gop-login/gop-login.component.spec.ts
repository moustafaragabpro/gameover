import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopLoginComponent } from './gop-login.component';

describe('GopLoginComponent', () => {
  let component: GopLoginComponent;
  let fixture: ComponentFixture<GopLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
