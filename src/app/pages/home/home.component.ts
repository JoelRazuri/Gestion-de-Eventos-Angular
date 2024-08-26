import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../shared/services/events.service';
import { IEvent } from '../../interfaces/event';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  eventsList: IEvent[] = [];
  
  constructor(private readonly route: Router, private service: EventsService) {}
  
  ngOnInit(): void {
    this.service.getAllEvents().subscribe((data: IEvent[]) => {
      this.eventsList = data;
    });
  }

  navigateToLogin() {
    this.route.navigate(['/login']);
  }

  navigateToSignUp() {
    this.route.navigate(['/sign-up']);
  }

}
