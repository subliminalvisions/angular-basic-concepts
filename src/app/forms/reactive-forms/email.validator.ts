import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from  '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// testing 

export class EmailValidator {
    // static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {

    static EmailIsValid(control: AbstractControl) : ValidationErrors | null {
        // if((control.value as string).pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])){
        //     // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        //     return {cannotContainSpace: true}
        // }
        if (
        //     !control.value.includes('@') 
        // || !control.value.includes('.')
        // || 
        // !control.value.endsWith(control.value.emailDomain)
        // || 
        !(control.value.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"))
        ) {
            return { EmailIsValid: true };
          }

        return null;
    }
}
