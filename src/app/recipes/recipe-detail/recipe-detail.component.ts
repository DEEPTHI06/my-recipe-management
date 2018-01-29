import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { recipeService } from "../recipeservice";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: recipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe) =>
      {
        this.selectedRecipe=recipe;
        console.log(recipe);
      }
    );
  }

  
}
