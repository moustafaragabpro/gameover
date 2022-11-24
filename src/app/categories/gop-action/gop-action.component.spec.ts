import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopActionComponent } from './gop-action.component';

describe('GopActionComponent', () => {
  let component: GopActionComponent;
  let fixture: ComponentFixture<GopActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
