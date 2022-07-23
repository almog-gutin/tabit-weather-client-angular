import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs';

import { HeaderService } from '../../services/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    isSidebarOpenSub!: Subscription;
    currentCitySub!: Subscription;
    interval: any;

    isSidebarOpen: boolean = false;
    currentCity: string = '';
    currentDate!: Date;
    isErrorPage: boolean = false;

    constructor(private router: Router, private headerService: HeaderService) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.isErrorPage = this.router.url === '/error';
            }
        });
    }

    ngOnInit(): void {
        this.isSidebarOpenSub = this.headerService.isSidebarOpen.subscribe((isSidebarOpen) => {
            this.isSidebarOpen = isSidebarOpen;
        });

        this.currentCitySub = this.headerService.currentCity.subscribe((currentCity) => {
            this.currentCity = currentCity;
        });

        this.currentDate = new Date();
        this.interval = setInterval((): void => {
            this.currentDate = new Date();
        }, 1000);
    }

    handleOpenSidebar(): void {
        this.headerService.updateSidebarState();
    }

    ngOnDestroy(): void {
        this.isSidebarOpenSub.unsubscribe();
        this.currentCitySub.unsubscribe();
        clearInterval(this.interval);
    }
}
