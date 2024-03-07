import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline-news',
  templateUrl: './headline-news.component.html',
  styleUrls: ['./headline-news.component.css']
})
export class HeadlineNewsComponent implements OnInit {

  @Input()
  imageNews:string = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";

  @Input()
  titleNews:string = "";

  @Input()
  description:string ="";

  @Input()
  category1:string = "";

  @Input()
  category2:string = "";

  //categories:string[] = [];

  @Input()
  Id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
