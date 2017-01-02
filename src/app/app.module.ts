import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './route/app-routing.module';

import { CoreModule } from './core/core.module';
import { HeaderModule } from './header/header.module';
import { PageMenuModule } from './page/menu/page-menu.module';
import { FooterModule } from './footer/footer.module';

import { AppComponent } from './app.component';

import './rxjs-extensions';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		HeaderModule,
		PageMenuModule,
		FooterModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent,]
})
export class AppModule { }