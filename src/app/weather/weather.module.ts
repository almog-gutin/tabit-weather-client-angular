import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherService } from './services/weather.service';

import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { WeatherSummaryComponent } from './pages/weather-page/weather-summary/weather-summary.component';
import { WeatherChartComponent } from './pages/weather-page/weather-chart/weather-chart.component';

@NgModule({
    declarations: [WeatherPageComponent, WeatherSummaryComponent, WeatherChartComponent],
    imports: [CommonModule, SharedModule, WeatherRoutingModule],
    providers: [WeatherService],
    exports: [],
})
export class WeatherModule {}
