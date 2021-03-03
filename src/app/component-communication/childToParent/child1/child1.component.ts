import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.less']
})
export class Child1Component implements OnInit {

  @Output() phoneEvent = new EventEmitter<string>();
  @Output() nameEvent = new EventEmitter<string>();

  userName: string = '';
  userPhone: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange () {
    this.nameEvent.emit(this.userName);
  }

  onPhoneChange () {
    this.phoneEvent.emit(this.userPhone);
  }

}
