import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../services/header.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    sidebarItems!: any;

    constructor(private headerService: HeaderService) {}

    ngOnInit(): void {
        this.sidebarItems = this.headerService.sidebarItems;
    }

    handleCloseSidebar(): void {
        this.headerService.updateSidebarState();
    }

    handleWeather(index: number): void {
        this.headerService.updateCurrentCity(index);
        this.handleCloseSidebar();
    }
}
