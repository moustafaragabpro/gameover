import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GocLoadingScreenComponent } from './goc-loading-screen.component';

describe('GocLoadingScreenComponent', () => {
  let component: GocLoadingScreenComponent;
  let fixture: ComponentFixture<GocLoadingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GocLoadingScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GocLoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
