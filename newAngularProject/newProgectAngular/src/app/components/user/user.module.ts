import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent,LogoutComponent],
  imports: [
    MatDividerModule,
    MatIconModule,
    NavBarComponent,
    MatInputModule,
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[LoginComponent,RegisterComponent,LogoutComponent],
  providers:[UserService]
})
export class UserModule { }
