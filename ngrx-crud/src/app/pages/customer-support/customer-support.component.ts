import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CustomerSupportService } from 'src/app/services/customer-support.service';
import { AppState } from 'src/app/store';
import { sendingCustomerSupportMessage } from 'src/app/store/actions/customer-support.actions';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {

  constructor(private customerSupportService: CustomerSupportService, private store: Store<AppState>) { }

  isSendSuccess: boolean | null = null;

  // vm$: Observable<fromSelectors.CustomerSupportViewModel>;

  ngOnInit(): void {
    // this.vm$ = this.store.pipe(
    //   select(fromSelectors.selectCustomerSupportModel)
    // );
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(sendingCustomerSupportMessage({ data: f.value }));
  }

  clearFeedback() {
    // this.store.dispatch(clearForm());
  }

}
