import { Component, OnInit } from 'angular2/core';

import { CustomerComponent } from './customer.component';

@Component({
  selector: 'my-customers',
  templateUrl: 'app/customers.component.html',
  directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
  customers = [];

  ngOnInit() {
    this.customers.push({
      id: 1,
      name: 'Dan'
    },{
      id: 2,
      name: 'John'
    },{
      id: 3,
      name: 'Voldemort'
    });
  }
}
