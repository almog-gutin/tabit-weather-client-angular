import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ModalService } from './core/services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    isModalOpenSub!: Subscription;

    isModalOpen: boolean = false;

    constructor(private modalService: ModalService) {}

    ngOnInit(): void {
        this.isModalOpenSub = this.modalService.isModalOpen.subscribe((isModalOpen: boolean): void => {
            this.isModalOpen = isModalOpen;
        });
    }

    ngOnDestroy(): void {
        this.isModalOpenSub.unsubscribe();
    }
}
