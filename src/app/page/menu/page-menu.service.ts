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
    
    getRepas(): Observable<Repas[]> {
        return this.http
            .get( this.url )
            .map(( r: Response ) => r.json());
    }
    
}