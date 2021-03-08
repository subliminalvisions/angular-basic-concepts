import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentv5Component } from './parentv5.component';

describe('Parentv5Component', () => {
  let component: Parentv5Component;
  let fixture: ComponentFixture<Parentv5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parentv5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentv5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
