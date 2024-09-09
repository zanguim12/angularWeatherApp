import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'd4125cada972ab99b23ec562442ab216';  // Remplace avec ta clé API
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir les données météo
  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${city}`);
  }
}
