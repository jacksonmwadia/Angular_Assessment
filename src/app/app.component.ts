import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent,NavbarComponent, LoginComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.styles.css'
})
export class AppComponent {
  title = 'angular-prac';
}
