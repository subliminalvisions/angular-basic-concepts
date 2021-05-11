import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conditional-validation',
  templateUrl: './conditional-validation.component.html',
  styleUrls: ['./conditional-validation.component.less']
})
export class ConditionalValidationComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.setUserCategoryValidators();

    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddinEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => {console.log(value);}
    // );
    // this.signupForm.statusChanges.subscribe(
    //   (value) => {console.log(value);}
    // );
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'max@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });
    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'Maxine'
    //   }
    // });

  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      userCategory: ['employee'],
      institution: [null],
      company: [null, [Validators.required]],
      salary: [null, [Validators.required]],
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;

    if (this.form.valid) {
      console.log(this.form.value); // Process your form
    }
  }

  setUserCategoryValidators() {
    const institutionControl = this.form.get('institution');
    const companyControl = this.form.get('company');
    const salaryControl = this.form.get('salary');

    this.form.get('userCategory').valueChanges
      .subscribe(userCategory => {

        if (userCategory === 'student') {
          institutionControl.setValidators([Validators.required]);
          companyControl.setValidators(null);
          salaryControl.setValidators(null);
        }

        if (userCategory === 'employee') {
          institutionControl.setValidators(null);
          companyControl.setValidators([Validators.required]);
          salaryControl.setValidators([Validators.required]);
        }

        institutionControl.updateValueAndValidity();
        companyControl.updateValueAndValidity();
        salaryControl.updateValueAndValidity();
      });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  getControls() {
    return (<FormArray>this.form.get('hobbies')).controls;
  }
  forbiddinEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1200);
    });
    return promise;
  }

}
