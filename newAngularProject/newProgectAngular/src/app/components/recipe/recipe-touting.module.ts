import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { DetailsRecipeComponent } from './details-recipe/details-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';

const USER_ROUTES: Route[] = [
  { path: 'recipe', redirectTo: 'add-recipe', pathMatch: 'full' },
  { path: 'add-recipe', component: AddRecipeComponent},
  { path: 'all-recipe', component: AllRecipeComponent},
  { path: 'all-recipe/:id', component: DetailsRecipeComponent},
  { path: 'edit-recipe/:id', component: EditRecipeComponent},
  { path: 'delete-recipe/:id', component: DeleteRecipeComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(USER_ROUTES)
  ],
  exports: [RouterModule]
})
export class RecipeToutingModule { }
