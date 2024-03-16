import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AllRecipeComponent } from './components/recipe/all-recipe/all-recipe.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomePageComponent },
    { path: 'user', loadChildren: () => import('./components/user/user.module').then(c => c.UserModule) },
    { path: 'recipe', loadChildren:()=>import('./components/recipe/recipe.module').then(c=>c.RecipeModule)}
];
//דף הבית זה לא מודל בראוט אחרת 
//מושלםם תודה/עכשיו עטד משו
//אוקי?ok