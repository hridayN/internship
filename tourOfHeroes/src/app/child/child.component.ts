import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() messageFromChild: EventEmitter<string> = new EventEmitter<string>();
  @Input() childNum: number; // @Input is used to indicate that this property is transfered from another component 
  constructor(){
    this.childNum=0;
  }
  sendMessageToParent(){
    this.messageFromChild.emit("Sending data from child/ Child says Hey")
  }
}
