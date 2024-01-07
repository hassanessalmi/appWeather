import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  city: any;
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeatherData(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}