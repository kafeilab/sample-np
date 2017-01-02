import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RepasCardHorizontalComponent, RepasCardVerticalComponent } from './repas-card.component';

@NgModule( {
    imports: [
        CommonModule
    ],
    declarations: [
        RepasCardHorizontalComponent,
        RepasCardVerticalComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        RepasCardHorizontalComponent,
        RepasCardVerticalComponent
    ]
})
export class SharedModule {

}