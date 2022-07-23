import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./weather/weather.module').then((m) => m.WeatherModule),
    },
    {
        path: 'error',
        component: ErrorPageComponent,
    },
    {
        path: '**',
        redirectTo: 'error',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
})
export class AppRoutingModule {}
