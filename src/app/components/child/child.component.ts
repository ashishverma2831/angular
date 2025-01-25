import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // parent to child
  // @Input() childMessage:string = "";

  // child to parent
  @Output() messageToParent = new EventEmitter<any>();

  sendMessageToParent() {
    console.log('Message from child');
    const message = 'Message from child hellllllllllllllllllooooooooo';
    this.messageToParent.emit(message);
  }
  
}
