import { Component, Input, input, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recipe } from '../../../models/recipe.model';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-smell-recipe',
  templateUrl: './smell-recipe.component.html',
  styleUrl: './smell-recipe.component.css'
})
export class SmellRecipeComponent {
  @Input() recipeForm!: FormGroup;
  @Input() recipe!: Recipe;
  @Input() index!: number;

  constructor(private router: Router) {
    this.recipeForm = new FormGroup({
      firstName: new FormControl()
    });
  }
  getDtailesRecipe() {
    this.router.navigate(['/detail-recipe/', `${this.recipe.recipeCode}`]);
  }
  toAllDetails() {
    const username = sessionStorage.getItem('username'); // משיכת שם משתמש מהזיכרון המקומי
    const password = sessionStorage.getItem('password'); // משיכת סיסמה מהזיכרון המקומי
    const code = sessionStorage.getItem('userCode'); // משיכת קוד משתמש מהזיכרון המקומי

    console.log("code", code)
    if (username && password) {

      this.router.navigate(['recipe/all-recipe',`${this.recipe.recipeCode}`]);
    }
    else {
      console.log('Username or password not found in local storage.');
      Swal.fire({
        icon: 'error',
        title: 'לא מורשה',
        text: 'עליך להרשם כדי לראות את המתכון'
      });
      this.router.navigate(['user/login']);
    }
  }
  editRecipe() {
    const code = sessionStorage.getItem('userCode'); // משיכת קוד משתמש מהזיכרון המקומי

    if(Number(code)===this.recipe.userCode)
    this.router.navigate(['recipe/edit-recipe',`${this.recipe.recipeCode}`]);
    else {
      console.log('Username or password not found in local storage.');
      Swal.fire({
        icon: 'error',
        title: 'Unauthorized',
        text: ''
      });
      this.router.navigate(['recipe/all-recipe']);
    }
  }
  deleteRecipe(){
    this.router.navigate(['recipe/delete-recipe',`${this.recipe.recipeCode}`]);
  }
}
