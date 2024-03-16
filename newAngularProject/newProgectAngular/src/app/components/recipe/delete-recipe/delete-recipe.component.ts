import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-delete-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './delete-recipe.component.html',
  styleUrl: './delete-recipe.component.css'
})
export class DeleteRecipeComponent implements OnInit{
  id: string | any;
  recipe?: Recipe
  constructor(private _recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // קבלת גישה לפרמטר 'id'
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id); // הדפסת ערך הפרמטר 'id'   
    }
    );
    this._recipeService.deleteRecipeById(this.id).subscribe(
      (rec: Recipe) => {
        console.log("sucsuc")
        Swal.fire({
          title: 'success',
          text: '',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
          background: '#FFFFFF',
          iconColor: 'green'
        }).then(() => {
          this.router.navigate(['/recipe/all-recipe']); 
        });
      }
    )
  }
}
