import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childv4Component } from './childv4.component';

describe('Childv4Component', () => {
  let component: Childv4Component;
  let fixture: ComponentFixture<Childv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childv4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
