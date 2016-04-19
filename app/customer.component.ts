import { Component, Input } from 'angular2/core';

@Component({
  selector: 'my-customer',
  templateUrl: 'app/customer.component.html',
  styles: [`.foo {background: lightgrey}`]
})
export class CustomerComponent  {
  @Input() customer: {id: number, name: string};
}
