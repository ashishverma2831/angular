import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  // String Interpolation
  // component to template
  username: string = 'John Doe';
  person = {
    name: 'Hello uncle',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Boston',
      state: 'MA'
    }
  }

  // Property Binding
  // component to template
  position: string = 'center';
  isDisabled: boolean = true;
  imageUrl: string = 'https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind.jpg?v=1624444348';


  // Event Binding
  // template to component
  onClick() {
    alert('Hello');
  }
  onClickMe(event: any) {
    console.log(event);
  }

  // Two-way Binding
  // component to template and template to component
  name: string = 'John Doe';
  age: number = 30;

}
