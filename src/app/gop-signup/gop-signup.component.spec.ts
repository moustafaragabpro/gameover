import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopSignupComponent } from './gop-signup.component';

describe('GopSignupComponent', () => {
  let component: GopSignupComponent;
  let fixture: ComponentFixture<GopSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
