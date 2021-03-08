import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childv3Component } from './childv3.component';

describe('Childv3Component', () => {
  let component: Childv3Component;
  let fixture: ComponentFixture<Childv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childv3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
