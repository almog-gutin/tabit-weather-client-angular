import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule, SharedModule, BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
