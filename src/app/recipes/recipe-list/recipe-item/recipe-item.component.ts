import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { recipeService } from "../../recipeservice";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: recipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.setActiveRecipe(this.recipe);
  }

}
