import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5d34a17dc46596c982e1eb0cfd0fc21&units=metric`;
    
    return this.http.get(url);
  }
}