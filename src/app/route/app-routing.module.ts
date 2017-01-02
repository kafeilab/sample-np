import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from '../page/home/page-home.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'pageHome', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'pageHome' },
    { path: 'pageHome', component: PageHomeComponent }
];

@NgModule( {
    imports: [RouterModule.forRoot( ROUTES )],
    declarations: [PageHomeComponent],
    exports: [RouterModule]
})
export class AppRoutingModule { }