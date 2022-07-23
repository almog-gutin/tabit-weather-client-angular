import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ModalService } from '../../services/modal.service';

import { IModalData } from 'src/app/shared/models/modal.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
    dataSub!: Subscription;

    data: IModalData = {
        body: '',
    };

    constructor(private modalService: ModalService) {}

    ngOnInit(): void {
        this.dataSub = this.modalService.modalData.subscribe((data: IModalData): void => {
            this.data = { ...this.data, ...data };
        });
    }

    handleCloseModal(): void {
        this.modalService.close();
    }

    ngOnDestroy(): void {
        this.dataSub.unsubscribe();
    }
}
