// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-recipe',
//   standalone: true,
//   imports: [],
//   templateUrl: './edit-recipe.component.html',
//   styleUrl: './edit-recipe.component.css'
// })
// export class EditRecipeComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../models/category.model';
import Swal from 'sweetalert2';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  recipe!: Recipe;
  categories: Category[] = []; // רשימת הקטגוריות
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      categoryCode: ['', Validators.required],
      preparationTimeInMinutes: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparationSteps: ['', Validators.required]
    });
    
    const recipeId = this.route.snapshot.paramMap.get('id');
    this.getRecipe(recipeId);
    this.loadCategories(); // טעינת רשימת הקטגוריות בזמן האתחול

  }

  getRecipe(id: string | any): void {
    this.recipeService.getRecipeById(id)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.populateForm();
      });
  }
  loadCategories(): void {
    this.recipeService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  populateForm(): void {
    this.recipeForm.setValue({
      recipeName: this.recipe.recipeName,
      categoryCode: this.recipe.categoryCode,
      preparationTimeInMinutes: this.recipe.preparationTimeInMinutes,
      difficultyLevel: this.recipe.difficultyLevel,
      ingredients: this.recipe.ingredients.join(', '),
      preparationSteps: this.recipe.preparationSteps.join('\n') 
    });
  }
  saveChanges(): void {
    Swal.fire({
      title: 'you sure?',
      text: '',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'yes, save changes',
      cancelButtonText: 'no',
      reverseButtons: true,
      confirmButtonColor: 'pink',
      cancelButtonColor: 'pink',
      background: '#FFFFFF'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.recipeForm.valid) {
          this.recipe = {
            ...this.recipe,
            recipeName: this.recipeForm.value.recipeName,
            categoryCode: this.recipeForm.value.categoryCode,
            preparationTimeInMinutes: this.recipeForm.value.preparationTimeInMinutes,
            difficultyLevel: this.recipeForm.value.difficultyLevel,
            ingredients: this.recipeForm.value.ingredients.split(','),
            preparationSteps: this.recipeForm.value.preparationSteps.split('\n')
          };
  
          this.recipeService.updateRecipe(this.recipe)
            .subscribe(() => {
              Swal.fire({
                title: 'success',
                text: '',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                background: '#FFFFFF',
                iconColor: 'green'
              }).then(() => {
                this.router.navigate(['/recipe/recipes-list']); 
              });
            });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'not valid',
            icon: 'error',
            confirmButtonColor: 'pink',
            background: '#FFFFFF'
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }
  
  
  
 }
