import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {
    sidebarItems: string[] = ['Jerusalem', 'New York', 'London', 'Berlin'];

    isSidebarOpen = new BehaviorSubject<boolean>(false);
    currentCity = new BehaviorSubject<string>(this.sidebarItems[0]);

    constructor() {}

    updateSidebarState(): void {
        this.isSidebarOpen.next(!this.isSidebarOpen.value);
    }

    updateCurrentCity(index: number): void {
        this.currentCity.next(this.sidebarItems[index]);
    }
}
