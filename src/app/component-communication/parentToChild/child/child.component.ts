import { Component, OnInit, Input} from '@angular/core'; 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {

  // @input decorator to fetch property from parent 
  @Input() 
  id: number; 
  constructor() { }

  ngOnInit(): void {
  }

}
