import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }, { validators: this.passwordMatchValidator() });
  }

  passwordMatchValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      return form.get('password')?.value === form.get('confirmPassword')?.value 
        ? null : { mismatch: true };
    };
  }

  printForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Handle the form submission logic here
      console.log('Form Submitted', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
