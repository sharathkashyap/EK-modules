import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'ek-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
    /**
* content is used to render IContents value on the view
*/
@Input() content: any;
data: any;
@Input() customClass: string;
@Output() clickEvent = new EventEmitter<any>();

constructor() {
}

ngOnInit() {
  if(this.content != null) {
    console.log(this.content);
    this.data = this.content;
  }
  
}


playContent(data, action) {
  this.clickEvent.emit({ 'action': action, 'data': data });
}
}
