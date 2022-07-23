import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherService {
    weatherStackAPIURL: string = environment.weatherStackAPIURL;

    constructor(private http: HttpClient) {}

    getCurrentWeatherByCity(city: string): Observable<any> {
        return this.http.get<any>(
            `${this.weatherStackAPIURL}?access_key=${environment.weatherStackAPIToken}&query=${city}`
        );
    }
}
