import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Contact } from '../model/contact';
import { AppService } from '../app.service';
import { SocialIcon } from '../model/social-icon';

@Component({
    moduleId: module.id,
    selector: 'np-footer',
    templateUrl: 'footer.component.html',
})
export class FooterComponent implements OnInit {
    
    fontAwesomePrefix: string = "fa";
    fontAwesomeSize: string = "fa-3x";

    socialIcons: SocialIcon[];

    contact: Contact;
    copyright: string;

    constructor(
            private appService: AppService
    ) { }

    ngOnInit(): void {
        this.appService
            .getContact()
            .subscribe(contact => this.contact = contact);
        this.appService
            .getCopyright()
            .subscribe(copyright => this.copyright = copyright);
        this.appService
            .getSocialIcons()
            .subscribe(socialIcons => this.socialIcons = socialIcons);
    }
}