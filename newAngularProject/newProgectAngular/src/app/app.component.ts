import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModule } from './components/recipe/recipe.module';
import { UserModule } from './components/user/user.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserModule, RecipeModule, HomePageComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'newProject';
}
