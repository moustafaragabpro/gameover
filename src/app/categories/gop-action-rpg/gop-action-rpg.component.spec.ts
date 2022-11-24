import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopActionRpgComponent } from './gop-action-rpg.component';

describe('GopActionRpgComponent', () => {
  let component: GopActionRpgComponent;
  let fixture: ComponentFixture<GopActionRpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopActionRpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopActionRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
