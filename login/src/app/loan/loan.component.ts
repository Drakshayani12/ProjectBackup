import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {

  loanForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.loanForm = this.fb.group({
      loanType: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      tenure:["",[Validators.required]]
    });
  }


  onSubmit() {
    
  }

}
