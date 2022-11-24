import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopZombieComponent } from './gop-zombie.component';

describe('GopZombieComponent', () => {
  let component: GopZombieComponent;
  let fixture: ComponentFixture<GopZombieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopZombieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopZombieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
