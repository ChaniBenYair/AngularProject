import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',

})
export class RegisterComponent {
  isPasswordValid: boolean = false;
  isAtLeast8Chars: boolean = false;
  hasUppercase: boolean = false;
  hasLowercase: boolean = false;
  hasSpecialChar: boolean = false;
  hasNumber: boolean = false;
  value!: string;
  hide = true;
  public userExists = false
  public newUser: User =new User();
  // name=''
  passwordField: any;
  public registerForm!: FormGroup

  constructor(private router: Router, private _userService: UserService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      "name": ['', [Validators.required]],
      "address": ['', [Validators.required]],
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', []],
    })
  }

  checkPasswordConditions() {
    const password = this.registerForm.controls['password'].value;
    this.isAtLeast8Chars = password.length >= 8;
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasLowercase = /[a-z]/.test(password);
    this.hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    this.hasNumber = /\d/.test(password);
  }

  register() {

    if (this.registerForm.valid) {
      const name = this.registerForm.get('name')?.value;
      const address = this.registerForm.get('address')?.value;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      console.log(name, address, email, password);
      this._userService.getUsers().subscribe({
        next: (users: User[]) => {
          this.userExists = users.some(user => user.email === email);
          console.log(users)
          console.log(this.userExists ? "true" : "false")

          if (this.userExists) {
            Swal.fire('User already exists! Please try again');
            this.registerForm.reset({ name: name });
          }
          else {
            console.log("name",name)
            this.newUser.code=0
            this.newUser.name = name
            this.newUser.address = address
            this.newUser.email = email
            this.newUser.password = password
            console.log(typeof(this.newUser.password)); // ידפיס 'string'
            console.log(typeof(this.newUser.email)); // ידפיס 'string'
            console.log(typeof(this.newUser.address)); // ידפיס 'string'
            console.log(typeof(this.newUser.name)); // ידפיס 'string'

            console.log("my----------------------", this.newUser)

            this._userService.addUser(this.newUser).subscribe(
              (res) => {
                console.log("succcccccccc")
                Swal.fire({
                  icon: 'success',
                  title: 'You have successfully registered!',
                })
                console.log(res)
              })

            sessionStorage.setItem('userId', this.newUser.code.toString());
            sessionStorage.setItem('name', this.newUser.name.toString());
            this.router.navigate(['recipe/all-recipe'])
          }
        },
        error: (err) => {
          console.log(err)
        }

      })

    } else {
      Swal.fire("The form is invalid!");
    }
  }
}

