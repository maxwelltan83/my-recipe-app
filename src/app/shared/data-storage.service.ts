import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AppStringService } from '../private/app-string.service';

@Injectable()
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private appStringService: AppStringService
    ) { }

    storeRecipes() {
        // take note that by default firebase would create any json data,
        // if we don't specify any filename.
        // As you can see here I create a recipes.json
        // and add to the end of the firebase link
        return this.http.put(
            this.appStringService.getRecipeDataUrl(),
            this.recipeService.getRecipes()
        );
    }

    getRecipes() {
        this.http.get(this.appStringService.getRecipeDataUrl())
        // .map(
        //     (response) => {
        //         const recipes: Recipe[] = <Recipe[]>response;
        //         for (const recipe of recipes) {
        //             if (!recipe['ingredients']) {
        //                 console.log(recipe);
        //                 recipe['ingredients'] = [];
        //             }
        //         }
        //         return recipes;
        //     }
        // )
        .subscribe(
            // (response) => {
            //     const recipes: Recipe[] = <Recipe[]>response;
            //     console.log(recipes);
            //     this.recipeService.setRecipes(recipes);
            // }
            (response) => {
                const recipes: Recipe[] = <Recipe[]>response;
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                console.log(recipes);
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
