import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'np-footer',
    templateUrl: 'footer.component.html',
})
export class FooterComponent {
    
    address: string = "13035 Sherbrooke Est Pointe-aux-Trembles (Entre Robert Chevalier et 31e Av.)";
    postcode: string = "H1A 1B9"
    mail: string = "nprestaurant@somemail.com";
    website: string = "www.nprestaurant.com.ca";
    phone: string = "(514) 642 0433";

    copyright: string = "\u00A9 2016 Nouveau Paradis'. All Rights Reserved.";

    fontAwesomePrefix: string = "fa";
    fontAwesomeSize: string = "fa-3x";

    socialIcons: SocialIcon[] = [
        { icon: "fa-facebook-official", url: "", style: "btn btn-primary" },
        { icon: "fa-twitter-square", url: "", style: "btn btn-info" },
        { icon: "fa-google-plus-square", url: "", style: "btn btn-danger" },
        { icon: "fa-instagram", url: "", style: "btn btn-warning" },
    ];
}

class SocialIcon {
    icon: string;
    url: string;
    style: string;
}