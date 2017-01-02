import { Component } from '@angular/core';

@Component({
    selector: 'np-app',
    template: `
        <div class="background">
            <np-header></np-header>
            <div class="page-content">
                <router-outlet></router-outlet>
                <!--<np-page-menu></np-page-menu-->
            </div>
            <np-footer></np-footer>
        </div>
    `
})
export class AppComponent { }