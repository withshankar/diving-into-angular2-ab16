import { Injectable } from 'angular2/core';

@Injectable()
export class DataService {

  constructor() { }

  getCustomers() {
    return [{
        id: 1,
        name: 'Dan'
      }, {
        id: 2,
        name: 'John'
      }, {
        id: 3,
        name: 'Voldemort'
      }];
  }

}
