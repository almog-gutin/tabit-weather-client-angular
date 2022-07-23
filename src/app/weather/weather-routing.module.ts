import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { WeatherPageComponent } from './pages/weather-page/weather-page.component';

const routes: Route[] = [
    {
        path: '',
        component: WeatherPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [],
})
export class WeatherRoutingModule {}
