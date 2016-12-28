import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Repas } from '../../model/repas';
import { PageMenuService } from './page-menu.service';

@Component({
    moduleId: module.id,
    selector: 'np-page-menu',
    templateUrl: 'page-menu.component.html',
    providers: [PageMenuService]
})
export class PageMenuComponent implements OnInit {
    
    imgUrl: string = "img/";
    repases: Repas[];
    
    constructor(
            private pageMenuService: PageMenuService
    ) { }
    
    ngOnInit(): void {
        this.pageMenuService
            .getRepas()
            .subscribe(repases => this.repases = repases);
    }
}