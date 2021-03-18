import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from  '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { WhiteSpaceValidator } from './whitespace.validator';
// whitespace.validator.ts

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit {
  // bioSection = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   age: new FormControl('')
  // });

  // bioSection = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   age: new FormControl(''),
  //   stackDetails: new FormGroup({
  //     stack: new FormControl(''),
  //     experience: new FormControl('')
  //   }),
  //   address: new FormGroup({
  //       country: new FormControl(''),
  //       city: new FormControl('')
  //   })
  // });
  bioSection = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: new FormControl('', [Validators.required, Validators.minLength(3), WhiteSpaceValidator.cannotContainSpace]),
    age: [''],
    stackDetails: this.fb.group({
      stack: [''],
      experience: ['']
    }),
    address: this.fb.group({
        country: [''],
        city: ['']
    })
  });

  // form = this.bioSection;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3), WhiteSpaceValidator.cannotContainSpace]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), WhiteSpaceValidator.cannotContainSpace]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), WhiteSpaceValidator.cannotContainSpace]),
    age: new FormControl('')
  });
   


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get f(){
    return this.form.controls;
  }
  callingFunction() {
    console.log(this.bioSection.value);
   }


}
