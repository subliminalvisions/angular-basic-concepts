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

  // emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  // !(control.value.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"))

  bioSection = this.fb.group({
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
    return this.bioSection.controls;
  }
  callingFunction() {
    console.log(this.bioSection.value);
   }


}
