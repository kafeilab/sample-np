import { Component } from '@angular/core';

@Component({
    selector: 'np-app',
    template: `
        <div class="background">
            <np-header></np-header>
            <div class="content">
                <np-page-menu></np-page-menu>
            </div>
            <np-footer></np-footer>
        </div>
    `
})
export class AppComponent { }