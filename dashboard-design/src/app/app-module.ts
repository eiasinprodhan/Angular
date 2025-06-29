import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './components/dashboard/dashboard';
import { Projects } from './components/projects/projects';
import { Signin } from './components/signin/signin';
import { Signup } from './components/signup/signup';
import { Buildings } from './components/buildings/buildings';
import { Floors } from './components/floors/floors';
import { Units } from './components/units/units';
import { Rawmaterials } from './components/rawmaterials/rawmaterials';

@NgModule({
  declarations: [
    App,
    Dashboard,
    Projects,
    Signin,
    Signup,
    Buildings,
    Floors,
    Units,
    Rawmaterials
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
