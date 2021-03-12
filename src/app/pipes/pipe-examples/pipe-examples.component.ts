import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.less']
})
export class PipeExamplesComponent implements OnInit {

  exampleArticleTitle: string;
  exampleJson: {};

  constructor() { }

  ngOnInit(): void {
    this.setVars();
    // best practices is to keep ngOnInit Clean by just calling other methods so that all logic isn't nested directly in ngOnInit
  }

  setVars() {
    this.exampleArticleTitle = 'Exclusive: Behind The recent Growth Of Spirit airlines';
    this.exampleJson = {fork: 'steel', spoon: 'gold', nested: {Qwasar: 3, numbers: [1, 2, 3, 4, 5]}};
  }

}
