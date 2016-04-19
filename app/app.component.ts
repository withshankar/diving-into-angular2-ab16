import {Component} from 'angular2/core';

import { CustomersComponent } from './customers.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [CustomersComponent]
})
export class AppComponent {
  title = 'Disney';
  divcolor = 'blue';

  showMeStuff() {
    this.title = 'Universal';
  }
}
