import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule,MatMenuModule,MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router){}
  
  login(){
    this.router.navigate(['/user/login'])
  }
  logout(){
    this.router.navigate(['/user/logout'])
  }
  allrecipes(){
    this.router.navigate(['/recipe/all-recipe'])
  }
  addrecipe(){
    this.router.navigate(['/recipe/add-recipe'])
  }
  register(){
    this.router.navigate(['/user/register'])
  }
}
