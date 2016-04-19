import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getCustomers() {
    return this._http.get('app/people.json')
      .map((res: Response) => res.json());
  }

  getCustomers_explicitly_configured() {
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
