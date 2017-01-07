import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PageMenuService } from '../page-menu.service';
import { Repas } from '../../../model/repas';

@Component( {
    moduleId: module.id,
    templateUrl: 'repas-list.component.html'
})
export class RepasListComponent implements OnInit {

    imgUrl: string = "img/";
    repases: Repas[];

    constructor(
        private route: ActivatedRoute,
        private pageMenuService: PageMenuService
    ) { }
    
    ngOnInit(): void {
        this.route
            .params
            .switchMap((params: Params) => this.pageMenuService.getRepasesByGroup(params['group']))
            .subscribe(repases => this.repases = repases);
    }
}