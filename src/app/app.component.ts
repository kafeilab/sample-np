import { Component } from '@angular/core';

@Component({
    selector: 'np-app',
    template: `
        <div class="background">
        <np-header></np-header>
        <div style="height:500px;"></div>
        <np-footer></np-footer>
        </div>
    `
})
export class AppComponent { }