import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopSocialComponent } from './gop-social.component';

describe('GopSocialComponent', () => {
  let component: GopSocialComponent;
  let fixture: ComponentFixture<GopSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
