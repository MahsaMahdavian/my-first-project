import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes : Recipe[] =[
  new Recipe(" ghormesabzi","khoshmazas","https://blog.okala.com/wp-content/uploads/2020/09/%D9%82%D9%88%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C.jpg"),
  new Recipe(" ghormesabzi","khoshmazas","https://blog.okala.com/wp-content/uploads/2020/09/%D9%82%D9%88%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C.jpg")
]
  constructor() { }

  ngOnInit(): void {
  }

}
