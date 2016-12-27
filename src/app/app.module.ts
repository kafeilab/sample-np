import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppService } from './app.service';

import './rxjs-extensions';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent
	],
	providers: [AppService],
	bootstrap: [AppComponent,]
})
export class AppModule { }