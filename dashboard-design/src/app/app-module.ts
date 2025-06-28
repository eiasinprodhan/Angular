import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './components/dashboard/dashboard';
import { Projects } from './components/projects/projects';
import { Signin } from './components/signin/signin';
import { Signup } from './components/signup/signup';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    Dashboard,
    Projects,
    Signin,
    Signup,
    Header,
    Footer
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
