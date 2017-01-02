import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageMenuComponent } from './page-menu.component';

@NgModule( {
    imports: [RouterModule.forChild( [
        { path: 'pageMenu', component: PageMenuComponent }
    ] )],
    exports: [RouterModule]
})
export class PageMenuRoutingModule { }