import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  customerForm : FormGroup;
  customerError$!: Observable<string>;
  customerSuccess$!: Observable<string>;
  isFormSubmitted: boolean = false;
 
  constructor(private formBuilder: FormBuilder,
   
  ) {
    this.customerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required,this.EmailValidator]],
      phoneNumber :["",[Validators.required,this.MobileValidator]],
      password: ["", [Validators.required, this.PasswordValidator]],
     
    });
 
  }
 
 
   
 
 
 
//  EmailValidator(control: AbstractControl):  ValidationErrors | null{
//   const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   let emailValue=control.value as string;
//   if(emailRegex.test(emailValue)){
//     return null ;
 
//   }
//   return {EmailValidator :true};
// }
 
// MobileValidator(control: AbstractControl):  ValidationErrors | null{
//   const mobileRegrex : RegExp= /^[0-9]{10,12}/;
//   const mobileValue=control.value.toString();
//   if(mobileRegrex.test(mobileValue)){
//      return null;
 
//   }
//   return {MobileValidator :true};
// }
 
// PasswordValidator(control : AbstractControl): ValidationErrors |null{
//   let passwordRegrex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
//   const passwordValue= control.value as string;
//   if(passwordRegrex.test(passwordValue)){
//     return null;
//   }
//   return {PasswordValidator : true};
// }
//   hasSpecialCharacters(inputString:string):boolean {
//     // Define a regular expression for special characters
//     const specialCharactersRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
 
//     // Test if the inputString contains any special characters
//     return specialCharactersRegex.test(inputString);
//   }
  onSubmit() {
    this.isFormSubmitted = true;
    this.customerSuccess$ = of('');
    this.customerError$ = of('');
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (this.customerForm.invalid) {
      return;
    } else {
     
      const data= this.customerForm.value;
      if(data.password.length < 8)
      {
        this.customerError$ = of("Password must be of 8 characters");
        return;
      }
      // if(this.hasSpecialCharacters(data.username))
      // {
      //   this.customerError$ = of("User Name must consist of letter and number only!!");
      //   return;
      // }
     
      if(!emailRegex.test(data.email))
      {
        this.customerError$ = of("Invalid Email Id!!");
        return;
 
      }
      // const username = name, password = "abcd1234";
      // const customer: Customer =
      //  new Customer(data);
     
      // ;
      // this.banksService.addCustomer(customer).subscribe(
      //   (res: any) => {
      //     this.customerSuccess$ = of('Customer created successfully');
      //   },
      //   (error) => {
      //     this.customerError$ = of("Unable to create customer");
      //   }
      // );
    }
  }
 
  
 
}
