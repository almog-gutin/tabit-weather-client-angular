import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HeaderService } from './services/header.service';
import { ModalService } from './services/modal.service';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, SidebarComponent, ModalComponent],
    imports: [CommonModule, SharedModule],
    providers: [HeaderService, ModalService],
    exports: [HeaderComponent, FooterComponent, ModalComponent],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the ApppModule only');
        }
    }
}
