import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { loginDetails } from '../../interfaces/login.interfaces';
import { Router, RouterLink } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FormsModule, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup
  constructor(){
    this.loginForm=new FormGroup({username: new FormControl("John Doe"),

    email: new FormControl(""),
    password: new FormControl(""),
})

  }  
  loginUser(){
console.log(this.loginForm.value);

  }        
}
