import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './details-recipe.component.html',
  styleUrl: './details-recipe.component.css'
})
export class DetailsRecipeComponent implements OnInit {
  id: string | any;
  recipe?: Recipe

  constructor(private route: ActivatedRoute, private _recipeService:RecipeService) { }

  ngOnInit(): void {
    // קבלת גישה לפרמטר 'id'
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id); // הדפסת ערך הפרמטר 'id'   
    }
    );
    this._recipeService.getRecipeById(this.id).subscribe(
      (rec: Recipe)=>{
        this.recipe=rec;
      }
    )
  }

}
