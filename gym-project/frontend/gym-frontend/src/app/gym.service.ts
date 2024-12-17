import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  private apiUrl = 'http://localhost:3000/api/gym';  // URL del tuo backend

  constructor(private http: HttpClient) { }

  // Metodo per ottenere i dati delle palestre
  getGyms(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
