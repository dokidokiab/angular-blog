import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imgContent:string = ""
  titleContent:string = ""
  descriptionContent:string = ""

  //precisa ser string ou null por conta do método de obter o id
  private id:string | null = "0"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
        this.id = value.get("id")
      )

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    if(result){
      this.titleContent = result.title
      this.imgContent = result.photo
      this.descriptionContent = result.description
    }
  }



}
