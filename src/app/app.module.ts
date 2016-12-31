import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { PageMenuModule } from './page/menu/page-menu.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import './rxjs-extensions';

@NgModule({
	imports: [
		BrowserModule,
		CoreModule,
		PageMenuModule
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent
	],
	bootstrap: [AppComponent,]
})
export class AppModule { }