import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatIconModule,FormsModule,NgbModule,MatMenuModule,MatButtonModule,NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


}
