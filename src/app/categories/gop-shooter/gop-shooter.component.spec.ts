import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopShooterComponent } from './gop-shooter.component';

describe('GopShooterComponent', () => {
  let component: GopShooterComponent;
  let fixture: ComponentFixture<GopShooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopShooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopShooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
