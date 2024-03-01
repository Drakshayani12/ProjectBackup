import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {
  customerForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.customerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      customerId: ["", [Validators.required]],
      password: ["", [Validators.required,this.PasswordValidator]],
      
    });

    
  }
  PasswordValidator(control : AbstractControl): ValidationErrors |null{
    let passwordRegrex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const passwordValue= control.value as string;
    if(passwordRegrex.test(passwordValue)){
      return null;
    }
    return {PasswordValidator : true};
  }

  onSubmit() {
    
  }
}
