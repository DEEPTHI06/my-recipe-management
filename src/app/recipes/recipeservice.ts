
import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable()
export class recipeService {

    @Output() recipeSelected = new EventEmitter<Recipe>();

    private Recipes: Recipe[] = [
        new Recipe('Idli'),
        new Recipe('Dosa'),
        new Recipe('pulav'),
        new Recipe('biryani'),
        new Recipe('Bisibelebath')
    ];

    getRecipes() {
        return this.Recipes.slice();//returns exact copy
    }

    setActiveRecipe(activeRecipe: Recipe) {
        this.recipeSelected.emit(activeRecipe);
    }
}