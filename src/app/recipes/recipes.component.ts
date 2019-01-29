import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']

  // Adding the service here is not a good option,
  // becuase it when you navigate away from the recipe view it will destroy it.
  // as well as the service of the recipe will be destroy together.
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) {

  // }
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
