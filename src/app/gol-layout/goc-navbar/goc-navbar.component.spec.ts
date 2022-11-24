import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GocNavbarComponent } from './goc-navbar.component';

describe('GocNavbarComponent', () => {
  let component: GocNavbarComponent;
  let fixture: ComponentFixture<GocNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GocNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GocNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
