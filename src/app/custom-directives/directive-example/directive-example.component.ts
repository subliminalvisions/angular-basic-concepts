import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.less']
})
export class DirectiveExampleComponent implements OnInit {
  color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
