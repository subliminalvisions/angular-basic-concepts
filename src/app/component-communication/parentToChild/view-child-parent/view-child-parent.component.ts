import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewChildChildComponent } from "../view-child-child/view-child-child.component";

@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.less']
})
export class ViewChildParentComponent implements OnInit {

  @ViewChild(ViewChildChildComponent) childData;
  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.message = this.childData.message
  }


}
