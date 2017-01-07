import { NgModule } from '@angular/core';

import { SharedModule } from '../../share/shared.module';
import { PageMenuRoutingModule } from './page-menu-routing.module';

import { PageMenuComponent } from './page-menu.component';
import { PageMenuService } from './page-menu.service';
import { RepasListComponent } from './repas/repas-list.component';


@NgModule( {
    imports: [
        SharedModule,
        PageMenuRoutingModule
    ],
    declarations: [
        PageMenuComponent,
        RepasListComponent
    ],
    exports: [
        PageMenuComponent
    ],
    providers: [PageMenuService]
})
export class PageMenuModule { }