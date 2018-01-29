  
import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
import { recipeService } from "../recipeservice";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {
    Recipes : Recipe[] ;//undefined initially then get the values on ngoninit for which inject the service in the const.

  constructor(private recipeService : recipeService) {

   }
  ngOnInit() {
    this.Recipes=this.recipeService.getRecipes();
  }



}