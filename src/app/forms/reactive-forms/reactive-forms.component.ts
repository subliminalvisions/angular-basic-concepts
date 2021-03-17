import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from  '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  callingFunction() {
    console.log(this.bioSection.value);
   }


}
