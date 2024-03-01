import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      password: ["", [Validators.required, Validators.minLength(6),Validators.maxLength(8),this.PasswordValidator]]
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
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

 
}
