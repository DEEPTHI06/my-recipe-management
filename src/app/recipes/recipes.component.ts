import { Component, OnInit } from '@angular/core';
import { recipeService } from "./recipeservice";
import { Recipe } from "./recipe.model";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
 title='Welcome to Recipe Management';
  constructor() { }

  ngOnInit() {
    
  }


}

