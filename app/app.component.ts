import {Component} from 'angular2/core';

import { CustomersComponent } from './customers.component';
import { DataService } from './customer.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [CustomersComponent],
  providers: [DataService]
})
export class AppComponent {
  title = 'Disney';
  divcolor = 'blue';

  showMeStuff() {
    this.title = 'Universal';
  }
}
