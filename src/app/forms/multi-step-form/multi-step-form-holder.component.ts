import { Component, OnInit } from '@angular/core';
import { STEP_ITEMS } from './form-data';

@Component({
  selector: 'app-multi-step-form-holder',
  templateUrl: './multi-step-form-holder.component.html',
  styleUrls: ['./multi-step-form-holder.component.less']
})
export class MultiStepFormHolderComponent implements OnInit {
  formContent: any;
  formData: any;
  activeStepIndex: number;

  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    alert(JSON.stringify(this.formData));
  }

}
