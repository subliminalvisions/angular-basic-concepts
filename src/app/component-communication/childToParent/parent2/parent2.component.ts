import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.less']
})
export class Parent2Component implements OnInit {
  public userName = '';
  public userPhone = '';

  
  constructor() { }

  ngOnInit(): void {
  }
  
  nameEventHander($event: any) {
    this.userName = $event;
  }

  phoneEventHander($event: any) {
    this.userPhone = $event;
  }

}
