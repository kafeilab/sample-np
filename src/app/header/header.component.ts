import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Menu } from '../model/menu';
import { App } from '../model/app';
import { AppService } from '../app.service';

@Component( {
    moduleId: module.id,
    selector: 'np-header',
    templateUrl: 'header.component.html'
} )
export class HeaderComponent implements OnInit {

    logo: string = "Welcome";
    menus: Menu[];

    constructor( private appService: AppService ) { }

    ngOnInit(): void {
        this.appService.getMenu().subscribe(appData => {
            this.menus = appData ? (appData as App).menus : new Array<Menu>();
        });
    }
}