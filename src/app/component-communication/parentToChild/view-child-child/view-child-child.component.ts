import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.less']
})
export class ViewChildChildComponent implements OnInit {
  
  message = 'Fozzie Bear says Waka waka waka!';

  constructor() { }

  ngOnInit(): void {
  }

}
