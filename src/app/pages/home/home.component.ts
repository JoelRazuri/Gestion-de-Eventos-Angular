import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private readonly route: Router) {}

  navigateToLogin() {
    this.route.navigate(['/login']);
  }

  navigateToSignUp() {
    this.route.navigate(['/sign-up']);
  }
}
