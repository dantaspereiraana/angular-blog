import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../pages/data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string ="";
  contentTitle:string = "";
  contentDescription:string = "";
  private id:string | null = "0";

  constructor(private route:ActivatedRoute){};

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.id = value.get("id")
      if(this.id){
        this.setValuesToComponent(this.id)
      }
  })
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(
      article => article.id == id)[0]

      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
  }

}
