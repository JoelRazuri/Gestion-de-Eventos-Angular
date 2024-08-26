import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseUrl: string = 'https://gestion-de-eventos-drf-production.up.railway.app/api/events/';

  constructor(private http: HttpClient) { }


  getAllEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.baseUrl);
  }

  getEventById(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.baseUrl}/${id}`);
  }
}
