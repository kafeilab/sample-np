import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppService } from '../app.service';

@NgModule( {
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [],
    exports: [],
    providers: [AppService]
})
export class CoreModule { }