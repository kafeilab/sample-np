import { Component } from '@angular/core';

@Component({
    selector: 'np-app',
    template: `
        <h1>Welcome to Nouveau Paradis!</h1>
        <np-header></np-header>
    `
})
export class AppComponent {
    
    title = 'Welcome to Nouveau Paradis';
}