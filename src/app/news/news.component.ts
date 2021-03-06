import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  articles;

  constructor(private newsData: ExampleService) { }

  ngOnInit(): void {

    this.newsData.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });





  }

}
