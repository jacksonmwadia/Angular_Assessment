import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { register } from 'module';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, CommonModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})

export class RegisterComponent{
  title='register'
}
