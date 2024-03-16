import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {

  constructor(private router: Router) {}
  ngOnInit(){
    this.logout()
  }
  logout() {
    Swal.fire({
      title: 'Are you sure you want to disconnect?',
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: 'cancel',
      cancelButtonColor: 'pink',
      confirmButtonColor: 'pink',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        this.router.navigate(['/']); // ניתוב לדף הבית
      }
      this.router.navigate(['/']); // ניתוב לדף הבית

    });
  }
}
