import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopAlphabeticalComponent } from './gop-alphabetical.component';

describe('GopAlphabeticalComponent', () => {
  let component: GopAlphabeticalComponent;
  let fixture: ComponentFixture<GopAlphabeticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopAlphabeticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopAlphabeticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
