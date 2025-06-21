import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Allemployees } from './allemployees/allemployees';
import { Addemployee } from './addemployee/addemployee';
import { Searchemployee } from './searchemployee/searchemployee';
import { Contactus } from './contactus/contactus';
import { Aboutus } from './aboutus/aboutus';

@NgModule({
  declarations: [
    App,
    Home,
    Allemployees,
    Addemployee,
    Searchemployee,
    Contactus,
    Aboutus,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
