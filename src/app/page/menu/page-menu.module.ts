import { NgModule } from '@angular/core';

import { SharedModule } from '../../share/shared.module';
import { PageMenuRoutingModule } from './page-menu-routing.module';

import { PageMenuComponent } from './page-menu.component';
import { PageMenuService } from './page-menu.service';


@NgModule( {
    imports: [
        SharedModule,
        PageMenuRoutingModule
    ],
    declarations: [
        PageMenuComponent
    ],
    exports: [
        PageMenuComponent
    ],
    providers: [PageMenuService]
})
export class PageMenuModule { }