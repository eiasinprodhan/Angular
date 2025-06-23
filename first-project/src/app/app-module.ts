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
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [
    App,
    Home,
    Allemployees,
    Addemployee,
    Searchemployee,
    Contactus,
    Aboutus,
    Header,
    Footer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
