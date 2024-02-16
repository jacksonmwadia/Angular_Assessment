import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router: Router){}
islogedIn=false;

navigatologin(){
    this.router.navigate(['login'])
}
navigatoregister(){
  this.router.navigate(['register'])
}}
