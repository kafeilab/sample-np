import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { App } from './model/app';
import { Menu } from './model/menu';
import { Contact } from './model/contact';
import { SocialIcon } from './model/social-icon';

@Injectable()
export class AppService {
    
    url: string = 'data/app.json';
    
    constructor(
            private http: Http
    ) { }
    
    getMenus(): Observable<Menu[]> {
//        if (this.appData) {
//            return Observable.of(this.appData.menus);
//        }
        return this.http
            .get(this.url)
            .map((r: Response) => {
                let data = r.json();
                return data ? (data as App).menus : new Array<Menu>();
            });
    }
    
    getContact(): Observable<Contact> {
        return this.http
            .get(this.url)
            .map((r: Response) => {
                let data = r.json();
                return data ? (data as App).contact : new Contact();
            });
    }
    
    getCopyright(): Observable<string> {
        return this.http
            .get(this.url)
            .map((r: Response) => {
                let data = r.json();
                return data ? (data as App).copyright : "\u00A9 All Rights Reserved.";
            });
    }
    
    getSocialIcons(): Observable<SocialIcon[]> {
        return this.http
            .get(this.url)
            .map((r: Response) => {
                let data = r.json();
                return data ? (data as App).socialIcons : new Array<SocialIcon>();
            });
    }
    
}