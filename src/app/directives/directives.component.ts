import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

    isTrue: boolean = false;
    show: boolean = true;

    items: string[] = ['Angular', 'React', 'Vue', 'Ember', 'Backbone'];

    viewMode:string = 'list';
}
