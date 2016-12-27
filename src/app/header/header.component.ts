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
    logoUrl: string = "img/logo.png";
    menus: Menu[];

    constructor(
            private appService: AppService
    ) { }

    ngOnInit(): void {
        this.appService
            .getMenus()
            .subscribe(menus => this.menus = menus);
    }
}