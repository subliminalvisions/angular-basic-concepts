import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from  '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { WhiteSpaceValidator } from './whitespace.validator';
// import { EmailValidator } from './email.validator';
// whitespace.validator.ts

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit {

  // emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  emailRegex = "^[0-9a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  // emailRegex = "^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$";

  newForm = this.fb.group({
  // bioSection = this.fb.group({
  // form = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      Validators.minLength(3), 
      WhiteSpaceValidator.cannotContainSpace,
      Validators.pattern(this.emailRegex),
      // EmailValidator.EmailIsValid,
      // pattern to match email
      // Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})')
    ]),
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

  // form = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.minLength(3), WhiteSpaceValidator.cannotContainSpace]),
  //   firstName: new FormControl('', [Validators.required, Validators.minLength(3), WhiteSpaceValidator.cannotContainSpace]),
  //   lastName: new FormControl('', [Validators.required, Validators.minLength(3), WhiteSpaceValidator.cannotContainSpace]),
  //   age: new FormControl('')
  // });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get f(){
    return this.newForm.controls;
  }
  callingFunction() {
    console.log(this.newForm.value);
   }


}
