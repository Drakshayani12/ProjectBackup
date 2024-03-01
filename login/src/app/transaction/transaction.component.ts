import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {


  transactionForm: FormGroup;
  accounts$!: Observable<any>; //Observable<Account[]>;
 // date:Date;
 // role:string|null;
 // userId:string|null;
 // transactionError$: Observable<string>;
 // transactionSuccess$: Observable<string>;
 // users$: Observable<Customer[]>;
 // isFormSubmitted: boolean = false;

 // errorMessages: { [key: string]: string } = {
 //   NOT_ENOUGH_BALANCE: "Not enough balance to complete transaction",
 // };

 constructor(
   private formBuilder: FormBuilder,
   // private authService: AuthService,
   // private bankService: BankService,
   // private route: ActivatedRoute,
   // private router: Router
 ) {
  
   this.transactionForm = this.formBuilder.group({
     accounts: ["", Validators.required],
     destAccountNo :["",[Validators.required]],
    amount: ["", Validators.required],
     transactionType: ["", Validators.required],

      });
 }

 // ngOnInit(): void {
 //   this.role = localStorage.getItem("role");
 //   this.userId =localStorage.getItem("user_id");
  
  
 //   if(this.role=='USER'){
 //     // this.accounts$ = this.bankService.getAccounts(strUserId);
    
 //   this.accounts$ = this.bankService.getAccountsByUser(this.userId);
  
 //   } else{
 //     this.accounts$ = this.bankService.getAccounts();
 //     console.log(this.accounts$);
  
 //   }
 //     console.log(this.accounts$);
  
  



 onSubmit() {
   // this.isFormSubmitted = true;
   // this.transactionError$ = of("");
   // this.transactionSuccess$ = of("");
   // if (this.transactionForm.invalid) {
   //   return;
   // } else {
   //   const data = this.transactionForm.value;
   //   console.log(data);
   //   data.transactionDate= new Date();
   //   const transaction: Transaction = new Transaction(data);
   //   console.log(transaction);
   //   this.bankService.performTransaction(transaction).subscribe(
   //     (res: any) => {
   //       this.transactionSuccess$ = of("Transaction performed successfully");
   //     },
   //     ({ error }) => {
   //       this.transactionError$ = of(this.errorMessages[error.message]);
   //     }
   //   );
   // }
 }

}