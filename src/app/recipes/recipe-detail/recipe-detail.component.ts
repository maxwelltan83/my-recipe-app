// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id']; // only work for the first load
    this.route.params.subscribe(
      (params: Params) => {
        // this.id = +params['id']; // cast it to number
        this.id = Number(params['id']); // convert string to number
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    // console.log(this.recipe.ingredients);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route }); // more complex routing
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
