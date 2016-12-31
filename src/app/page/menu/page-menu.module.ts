import { NgModule } from '@angular/core';

import { SharedModule } from '../../share/shared.module';

import { PageMenuComponent } from './page-menu.component';

@NgModule( {
    imports: [
        SharedModule
    ],
    declarations: [
        PageMenuComponent
    ],
    exports: [
        PageMenuComponent
    ]
})
export class PageMenuModule { }