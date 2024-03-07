import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-news',
  templateUrl: './common-news.component.html',
  styleUrls: ['./common-news.component.css']
})
export class CommonNewsComponent implements OnInit {

  @Input()
  Id:string = "0"

  @Input()
  imageNews:string = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"

  @Input()
  titleNews:string = ""

  @Input()
  description:string = ""

  @Input()
  category1:string = ""

  @Input()
  category2:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
