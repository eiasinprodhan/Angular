import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './components/dashboard/dashboard';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Buildings } from './components/buildings/buildings';
import { Floors } from './components/floors/floors';
import { Units } from './components/units/units';
import { Rawmaterials } from './components/rawmaterials/rawmaterials';
import { Allstages } from './components/allstages/allstages';
import { Workers } from './components/workers/workers';

@NgModule({
  declarations: [
    App,
    Dashboard,
    Footer,
    Header,
    Home,
    Projects,
    Buildings,
    Floors,
    Units,
    Rawmaterials,
    Allstages,
    Workers
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
