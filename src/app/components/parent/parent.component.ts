import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  // parent to child
  // parentMessage:string = "Message from parent";


  // child to parent
  receivedDataFromChild:string = "";
  receiveMessage(data:any) {
    this.receivedDataFromChild = data;
  }

}
