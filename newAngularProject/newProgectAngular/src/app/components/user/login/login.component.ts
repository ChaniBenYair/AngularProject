import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../../../models/user.model";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public loginForm!: FormGroup;
  public user!: User
  userExists = true;
  showRotatingIcon = false

  constructor(public router: Router, private _userService: UserService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      "username": ['', [Validators.required]],
      "password": ['', [Validators.required]],
    })
  }

  onSubmit() {
    console.log("submit")
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log("username", username)
      console.log("password", password)

      this._userService.getUsers().subscribe(
        (users: User[]) => {
          this.userExists = users.some(user => user.name === username);
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
          console.log("users", users)
          if (this.userExists) {
            if (users.some(user => user.name === username && user.password === password)) {
              sessionStorage.setItem('username', username);
              sessionStorage.setItem('password', password);
              sessionStorage.setItem('userCode', JSON.stringify(users.find(user => user.name === username && user.password === password)?.code));
              console.log("yes")
              Swal.fire({
                icon: 'success',
                title: 'User Exists!',
                text: 'User was found in the system.'
              });
              this.router.navigate(['/recipe/all-recipe']);
            }
            else {
              console.log("yes")
              Swal.fire({
                icon: 'error',
                title: ' Not correct password!',
                text: 'User does not exist in the system.'
              });
            }
          } else {
            console.log("register")
            setTimeout(() => {
              this.router.navigate(['user/register'], { queryParams: { name: username } })
            });
          }
        }


      )
    }
  }
}
