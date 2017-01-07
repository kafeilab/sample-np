import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Repas } from '../../model/repas';

@Injectable()
export class PageMenuService {
    
    url: string = "data/menu-fr.json";

    constructor(
            private http: Http
    ) { }
    
    getRepases(): Observable<Repas[]> {
        return this.http
            .get( this.url )
            .map(( r: Response ) => r.json());
    }
    
    getRepasesByGroup(group: string): Observable<Repas[]> {
        return this.getRepases()
            .map(r => r.filter(repas => repas.group === group));
    }
    
    getRepasGroups(): Observable<string[]> {
        return this.getRepases()
            .map(r => r.map(r => r.group))
            .map(r => r.filter((group, i, groups) => groups.indexOf(group) == i));
//            .map(r => Object.keys(r).map(key => r[key]))
//            .map(r => r.filter((group, i, groups) => groups.indexOf(group) == i));
    }
    
}