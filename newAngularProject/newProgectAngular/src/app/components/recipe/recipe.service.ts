import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7038/api';

  getRecipe(): Observable<Recipe[]> {
    console.log("succccc")
    return this.http.get<Recipe[]>(`${this.apiUrl}/Recipe`);
  }
  addRecipe(recipe: Recipe):Observable<Recipe>{
    console.log("suc",recipe)
    return this.http.post<Recipe>(`${this.apiUrl}/Recipe`,recipe)
  }
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiUrl}/Category`)
  }
  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/Recipe/${id}`);
  }
  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/Recipe/${recipe.recipeCode}`, recipe);
  }
  deleteRecipeById(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/Recipe/${id}`);
  }
}
