import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
//import 'rxjs/Rx'; // load the full rxjs

import { CustomersComponent } from './customers.component';
import { DataService } from './customer.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [CustomersComponent],
  providers: [
    HTTP_PROVIDERS,
    DataService
  ]
})
export class AppComponent {
  title = 'Disney';
  divcolor = 'blue';

  showMeStuff() {
    this.title = 'Universal';
  }
}
