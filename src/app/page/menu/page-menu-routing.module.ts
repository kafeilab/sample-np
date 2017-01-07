import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageMenuComponent } from './page-menu.component';
import { RepasListComponent } from './repas/repas-list.component';

@NgModule( {
    imports: [RouterModule.forChild( [
        {
            path: 'pageMenu', component: PageMenuComponent, children: [
                { path: '', redirectTo: 'Repas Complet', pathMatch: 'full' },                                                      
                { path: ':group', component: RepasListComponent }
            ]
        }
    ] )],
    exports: [RouterModule]
})
export class PageMenuRoutingModule { }