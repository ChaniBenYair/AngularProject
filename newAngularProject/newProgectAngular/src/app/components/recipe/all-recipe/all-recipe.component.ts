import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FormGroup } from '@angular/forms';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-all-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './all-recipe.component.html',
  styleUrl: './all-recipe.component.css'
})
export class AllRecipeComponent implements OnInit{
 constructor(private _recipeService: RecipeService){}
 public recipeForm!: FormGroup;
 public recipes!: Recipe[];
 ngOnInit() {
   this._recipeService.getRecipe().subscribe(
     (rec: Recipe[]) => {
      console.log(rec)
      this.recipes = rec;

     })
 }
}
