import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Repas } from '../../model/repas';
import { PageMenuService } from './page-menu.service';

@Component({
    moduleId: module.id,
    selector: 'np-page-menu',
    templateUrl: 'page-menu.component.html'
})
export class PageMenuComponent implements OnInit {

    repases: Repas[];
    groups: string[];

    constructor(
        private pageMenuService: PageMenuService
    ) { }

    ngOnInit(): void {
        this.pageMenuService
            .getRepases()
            .subscribe(repases => this.repases = repases);
        this.pageMenuService
            .getRepasGroups()
            .subscribe(groups => this.groups = groups);
    }

}