import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepFormHolderComponent } from './multi-step-form-holder.component';

describe('MultiStepFormHolderComponent', () => {
  let component: MultiStepFormHolderComponent;
  let fixture: ComponentFixture<MultiStepFormHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStepFormHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepFormHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
