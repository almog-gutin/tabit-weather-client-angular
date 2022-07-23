import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HeaderService } from 'src/app/core/services/header.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { WeatherService } from 'src/app/weather/services/weather.service';

import { WeatherSummary } from 'src/app/weather/models/weahter.model';

@Component({
    selector: 'app-weather-summary',
    templateUrl: './weather-summary.component.html',
    styleUrls: ['./weather-summary.component.scss'],
})
export class WeatherSummaryComponent implements OnInit, OnDestroy {
    currentCitySub!: Subscription;

    currentCity: string = '';
    weatherSummary: WeatherSummary = new WeatherSummary();

    constructor(
        private headerService: HeaderService,
        private weatherService: WeatherService,
        private modalService: ModalService
    ) {}

    ngOnInit(): void {
        this.currentCitySub = this.headerService.currentCity.subscribe((currentCity: string): void => {
            this.currentCity = currentCity;

            this.getCurrentWeatherByCity();
        });
    }

    getCurrentWeatherByCity(): void {
        this.weatherService.getCurrentWeatherByCity(this.currentCity).subscribe((res: any): void => {
            if (res.error) {
                this.modalService.open({ body: 'Something went wrong!' });

                return;
            }
            const { temperature, humidity, cloudcover, weather_descriptions, weather_icons } = res.current;

            this.weatherSummary = new WeatherSummary(
                temperature,
                humidity,
                cloudcover,
                weather_descriptions,
                weather_icons
            );
        });
    }

    ngOnDestroy(): void {
        this.currentCitySub.unsubscribe();
    }
}
