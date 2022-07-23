import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IModalData } from 'src/app/shared/models/modal.model';

@Injectable()
export class ModalService {
    isModalOpen = new BehaviorSubject<boolean>(false);
    modalData = new BehaviorSubject<IModalData>({});

    constructor() {}

    open(data: IModalData): void {
        this.modalData.next(data);
        this.isModalOpen.next(true);
    }

    close(): void {
        this.modalData.next({});
        this.isModalOpen.next(false);
    }
}
