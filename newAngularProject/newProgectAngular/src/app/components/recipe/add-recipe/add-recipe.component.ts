import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { Category } from '../../../models/category.model';
import { RecipeService } from '../recipe.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = new Recipe();
  categories: Category[] = []; // נניח שיש מודל של קטגוריה
  instructionsArray: string[] = []

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    const isLoggedIn = sessionStorage.getItem('username') && sessionStorage.getItem('password');
    if (!isLoggedIn) {
      {
        setTimeout(() => {
          this.router.navigate(['/user/login']);

        }); // אם רוצים שהאנימציה תמשך שתי שניות
      }

    } else {
      this.recipeService.getCategories().subscribe(
        (category: Category[]) => {
          console.log(category)
          this.categories = category;
        })
      this.addRecipe()
    }
  }


  async addRecipe() {

    this.recipe.dateAdded = new Date();
    this.recipe.recipeCode = 0;
    this.recipe.imageRoute = "";
    const userCode: any = sessionStorage.getItem('userCode');
    this.recipe.userCode = parseInt(userCode);

    const { value: name } = await Swal.fire({
      title: "Add recipe",
      input: "text",
      inputPlaceholder: "Recipe name"
    });

    console.log(name)
    this.recipe.recipeName = name;

    if (name) {
      const categoryOptions = this.categories.map(category => {
        return {
          "": category.name
        };
      });

      const { value: time } = await Swal.fire({
        title: "preparation time in minutes",
        input: "number",
        inputPlaceholder: "Enter preparation time in minutes"
      });

      this.recipe.preparationTimeInMinutes = parseInt(time)

      const { value: difficultyLevel } = await Swal.fire({
        title: "difficulty level",
        input: "number",
        inputPlaceholder: "Enter difficulty level"
      });

      this.recipe.difficultyLevel = parseInt(difficultyLevel)

      const { value: category } = await Swal.fire({
        title: "Select Category",
        input: "radio",
        inputOptions: categoryOptions,
        inputPlaceholder: "Select a category"
      });

      console.log(category);
      this.recipe.categoryCode = parseInt(category);

      const { value: ingredients } = await Swal.fire({
        title: "Add Ingredients",
        input: "textarea",
        inputPlaceholder: "Enter ingredients, each on a new line"
      });

      this.instructionsArray = ingredients.split("\n");
      let counter = 0;

      for (const instruction of this.instructionsArray) {
        this.recipe.ingredients[counter] = instruction
        console.log("sssuuuccc")
        counter++;
      }
      const { value: instructions } = await Swal.fire({
        title: "Add Preparation Instructions",
        input: "textarea",
        inputPlaceholder: "Enter preparation instructions, each on a new line",
      });

      this.instructionsArray = instructions.split("\n");
      counter = 0;

      for (const instruction of this.instructionsArray) {
        this.recipe.preparationSteps[counter] = instruction
        console.log("sssuuuccc")
        counter++;
      }

      if (category && (ingredients || instructions)) {
        Swal.fire({
          title: "Recipe Added Successfully!",
          icon: "success",
          confirmButtonText: "OK"
        });
        this.saveRecipe()
      } else {
        Swal.fire({
          title: "Recipe is missing category, ingredients, or instructions.",
          icon: "warning",
          confirmButtonText: "OK"
        });
      }
    }
  }
  saveRecipe(): void {
    console.log(this.recipe)
    this.recipeService.addRecipe(this.recipe);
    this.router.navigate(['/recipe/all-recipe']);
  }
}

