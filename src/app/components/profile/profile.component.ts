import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

@Input() data:any;
@Output() event= new EventEmitter();

emitColor(color:string)
{
  this.data.border = color
 this.event.emit({color,title:this.data?.title});
}
}
