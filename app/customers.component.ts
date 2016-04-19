import { Component, OnInit } from 'angular2/core';

import { CustomerComponent } from './customer.component';

import { DataService } from './customer.service';

@Component({
  selector: 'my-customers',
  templateUrl: 'app/customers.component.html',
  directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
  customers = [];

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.customers = this._dataservice.getCustomers();
  }
}
