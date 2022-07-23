import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';

import { ErrorInterceptor } from './interceptors/error.interceptor';

import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [ErrorPageComponent, CardComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts'),
        }),
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
    exports: [RouterModule, HttpClientModule, NgxEchartsModule, ErrorPageComponent, CardComponent],
})
export class SharedModule {}
