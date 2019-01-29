import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();

    // better approach is to use Subject then the EventEmitter
    // EventEmitter should always use it with @Output()
    // Otherwise if angular change something it will break our code
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients.slice()[index];
    }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    public addIngredients(ingredients: Ingredient[]) {
        for (const ingredient of ingredients) {
            this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());

        // short form of converting [] to 1,2,3 but not readable
        // this.ingredients.push(...ingredients);
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1); // Use splice method to remove item
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
