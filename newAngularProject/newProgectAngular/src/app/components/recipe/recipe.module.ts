import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeToutingModule } from './recipe-touting.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RecipeService } from './recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { SmellRecipeComponent } from './smell-recipe/smell-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsRecipeComponent } from './details-recipe/details-recipe.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';

@NgModule({
  declarations: [AddRecipeComponent, AllRecipeComponent,SmellRecipeComponent,DetailsRecipeComponent,EditRecipeComponent,DeleteRecipeComponent],
  imports: [
    MatOption,
    MatInputModule,
    MatFormField,
    MatIconModule,
    NavBarComponent,
    CommonModule,
    RecipeToutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[AddRecipeComponent, AllRecipeComponent,SmellRecipeComponent,EditRecipeComponent,DeleteRecipeComponent],
  providers:[RecipeService]
})
export class RecipeModule { }
