import { Recipe } from './recipe.model';
// import { EventEmitter, Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Bento 001',
            'This is simply a recipe',
            './assets/img/recipes/bento-001.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Bento 002',
            'This is simply a ecipe',
            './assets/img/recipes/bento-002.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        // using slice method we can avoid outside access it directly
        // but outside will get a new copy instead
        return this.recipes.slice();
    }

    getRecipe(ingredientIndex: number) {
        return this.recipes.slice()[ingredientIndex];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
