import { Component, Input } from '@angular/core';

import { Repas } from '../model/repas';

@Component({
    moduleId: module.id,
    selector: 'np-repas-card-h',
    templateUrl: 'repas-card-horizontal.component.html'
})
export class RepasCardHorizontalComponent {
     @Input() repas: Repas;
     @Input() imgUrl: string;
     
     getImageUrl(): string {
         return this.imgUrl + this.repas.img;
     }
}

@Component({
    moduleId: module.id,
    selector: 'np-repas-card-v',
    templateUrl: 'repas-card-vertical.component.html'
})
export class RepasCardVerticalComponent {
    @Input() repas: Repas;
    @Input() imgUrl: string;
    
    getImageUrl(): string {
        return this.imgUrl + this.repas.img;
    }
}