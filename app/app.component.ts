import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'Disney';
  divcolor = 'blue';

  showMeStuff() {
    this.title = 'Universal';
  }
}
