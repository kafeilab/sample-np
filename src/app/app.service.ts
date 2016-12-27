import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { App } from './model/app';

@Injectable()
export class AppService {
    
    url: string = 'data/app.json';
    
    constructor(
            private http: Http
    ) { }
    
    getMenu(): Observable<App> {
        return this.http
            .get(this.url)
            .map((r: Response) => r.json());
    }
}