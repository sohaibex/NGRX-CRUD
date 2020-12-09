import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerMessage } from '../shared/customer-message';

@Injectable({
  providedIn: 'root'
})
export class CustomerSupportService {

  constructor() { }


  //This is a fake api call
  sendMessage(form: CustomerMessage): Observable<boolean> {
    return form.name ? of(true) : of(false);
  }
}
