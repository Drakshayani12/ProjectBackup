import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { MatPaginator } from '@angular/material/paginator';
// import {MatTableModule} from '@angular/material/table';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // accounts$: Observable<Account[]> = of();
  // transactions$: Observable<Transaction[]> = of();
  // loan$:Observable<Loan[]>=of();
  // role: String | null = "";
  // constructor(private bankService: BankService, private router: Router) { }

  // ngOnInit(): void {
  //   this.role = localStorage.getItem("role");
  //   const strUserId = localStorage.getItem("user_id");
  //   //   this.customers$ = this.bankService.getCustomers();

  //   // console.log(this.customers$);
  //   console.log(this.role);

  //   if (this.role === 'USER') {
  //     this.accounts$ = this.bankService.getAccountsByUser(strUserId);

  //     this.transactions$ = this.bankService.getTransactionsByUser(strUserId);

  //   }
  //   if (this.role === 'ADMIN') {
  //     this.accounts$ = this.bankService.getAccounts();
  //     // console.log(this.accounts$);
  //     this.transactions$ = this.bankService.getAllTranactions();
  //     this.loan$=this.bankService.getAllLoan();

  //   }

  //   this.transactions$.subscribe((data) => {
  //     data.forEach(m=> {console.log(m)});
  //   })

  // }
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // datasource: new MatTableDataSource(ELEMENT_DATA);
  // ngOnInit(){
  //   this.datasource.paginator = this.paginator;
  //   this.
  // }
  editCustomer(): void {
    // this.router.navigate(['/bank/customer/edit', { customerId: customer.customerId,name:customer.name,email:customer.email,username:customer.username, password:customer.password,role:customer.role }]);

  }
  deteteCustomer() {

  }

  viewDetails(id:number) {
    // this.router.navigateByUrl(`/bank/account-details/${id}`);
  }
}
